import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandler } from '@angular/common/http';

import { AppHttpInterceptor } from './app-http.interceptor';
import { AuthService } from '../services/auth.service';

describe('AppHttpInterceptor', () => {
  let interceptor: AppHttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: { accessToken: 'fake-token' } },
        AppHttpInterceptor
      ]
    });

    interceptor = TestBed.inject(AppHttpInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header if not /auth/login', () => {
    const request = new HttpRequest('GET', '/api/data');
    const next: HttpHandler = {
      handle: (req) => {
        expect(req.headers.has('Authorization')).toBeTrue();
        expect(req.headers.get('Authorization')).toBe('Bearerfake-token');
        return {} as any;
      }
    };
    interceptor.intercept(request, next);
  });

  it('should NOT add Authorization header if URL includes /auth/login', () => {
    const request = new HttpRequest('GET', '/auth/login');
    const next: HttpHandler = {
      handle: (req) => {
        expect(req.headers.has('Authorization')).toBeFalse();
        return {} as any;
      }
    };
    interceptor.intercept(request, next);
  });
});
