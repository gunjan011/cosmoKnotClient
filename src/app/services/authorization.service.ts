import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ActiveUserData } from '../models/activeUser';
import { Token } from '../models/tokens';
import { } from '@angular/core/';
import { APIURL } from '../../environments/environment.prod';
//import { Token } from '@angular/compiler';

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
   token: Token;
   aToken?: Token;



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

  login(user) {
    
    return this.http.post(`${APIURL}/user/login`, {user: user})
      .subscribe((token: Token) => {
        localStorage.setItem('id_token', token.sessionToken);
      })

  }

  logout() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('sessionToken');
  }
}