import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ActiveUserData } from '../models/activeUser';
import { AdminToken, SessionToken } from '../models/tokens';
import { } from '@angular/core/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public user: ActiveUserData;
  token = new SessionToken;
  aToken?= new AdminToken;

  constructor(
    private http: HttpClient
  ) { }

  public get activeUserValue(): void {
    switch (this.user.is_admin) {
      case true:
        JSON.parse(localStorage.getItem('adminToken'));
        JSON.parse(localStorage.getItem('sessionToken'));
        return localStorage.setItem('sessionToken', this.token.sessionToken),
          localStorage.setItem('adminToken', this.aToken.adminToken);
      case false:
        JSON.parse(localStorage.getItem('sessionToken'))
        return localStorage.setItem('sessionToken', this.token.sessionToken)
    }
  }

  login(user): Observable<ActiveUserData> {
    return this.http.post<ActiveUserData>(`https://cosmoknotserver.herokuapp.com/user/login`, user, httpOptions)
      .pipe(tap(user => {
        if (user) {
          this.activeUserValue
        } return user;
      })
      );
  }

  logout() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('sessionToken');
  }
}