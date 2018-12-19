import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActiveUserData, Token } from '../models/activeUser';
import { cosmoknotURL } from '../../environments/environment';


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
    
    return this.http.post(`${cosmoknotURL}/user/login`, {user: user})
      .subscribe((token: Token) => {
        localStorage.setItem('sessionToken', token.sessionToken);
      })

  }

  logout() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('sessionToken');
  }
}