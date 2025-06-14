import {AuthService} from "./services/auth.service";
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'digital-banking-web';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.loadJwtTokenFromLocalStorage();
  }
}
