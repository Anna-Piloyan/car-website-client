import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  url = 'http://localhost:8000/api';
  constructor(private router: Router, private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http
      .post(`${this.url}/auth/login`, user)
      .pipe(tap(this.setToken), catchError(this.handleError));
  }

  private setToken(response: any) {
    if (response) {
      //set token to localStorage
      const expiredDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem('token', response.token);
      localStorage.setItem('token-exp', expiredDate.toString());
    } else {
      localStorage.removeItem('token-exp')
      localStorage.removeItem('token')
      //localStorage.clear();
    }
  }

  private handleError(error: HttpErrorResponse) {
    let message = error.error.errorMessage;
    return throwError(() => new Error(message));
  }

  get token(): string | null {
    let expStr = localStorage.getItem('token-exp');
    if (expStr) {
      let expDate = new Date(expStr);
      if (new Date() > expDate) {
        this.logout();
        return null;
      }
    }
    return localStorage.getItem('token');
  }
  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean{
    return !!this.token
  }

  register(user: User): Observable<any> {
    return this.http
    .post(`${this.url}/auth/register`, user)
    .pipe(catchError(this.handleError));;

  }
}
