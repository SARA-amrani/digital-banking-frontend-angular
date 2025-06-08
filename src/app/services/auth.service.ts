import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  roles: string[] = [];
  username: string = '';
  accessToken: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Méthode de login
  public login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post("http://localhost:8085/auth/login", body, { headers });
  }

  // Charger les infos utilisateur à partir du token
  loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data['access_token'];

    const decodedToken: any = jwtDecode(this.accessToken);
    this.username = decodedToken.sub || '';
    this.roles = decodedToken.scope ? decodedToken.scope.split(' ') : [];

    window.localStorage.setItem('jwt-token', this.accessToken);
  }

  // Déconnexion de l'utilisateur
  logout() {
    this.isAuthenticated = false;
    this.accessToken = '';
    this.username = '';
    this.roles = [];

    window.localStorage.removeItem('jwt-token');
    this.router.navigateByUrl('/login');
  }

  // Charger le token stocké dans le localStorage
  loadJwtTokenFromLocalStorage() {
    const token = window.localStorage.getItem('jwt-token');
    if (token) {
      this.loadProfile({ access_token: token });
      this.router.navigateByUrl('/admin/customers');
    }
  }
}
