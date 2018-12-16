import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDiagBoxComponent } from '../login-diag-box/login-diag-box.component';

export interface ActiveUser{
  username : string;
  password : string;
  is_admin : boolean;
  adminID : string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public username : string;
  public password : string;
  public is_admin : boolean;
  public adminID : string;

  
  constructor(public loginDiag : MatDialog) { }

  clickLogin(): any {
    const logDiagRef = this.loginDiag.open(LoginDiagBoxComponent, {
      width : '67vw',
      height : 'fit-content',
      data : {
          username : this.username,
          password : this.password,
          is_admin : this.is_admin,
          adminID : this.adminID
      }
    });
    return logDiagRef;
  }

}