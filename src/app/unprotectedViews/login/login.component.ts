import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDiagBoxComponent } from '../login-diag-box/login-diag-box.component';
import { UserData } from '../../models/user';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Router } from '@angular/router';

export interface ActiveUser {
  username: string;
  password: string;
  is_admin: boolean;
  adminID: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string;
  public password: string;
  public is_admin: boolean;
  public adminID: string;


  constructor(private router: Router,
    public loginDiag: MatDialog,
    private authService: AuthorizationService) { }
  user: UserData = {
    username: '',
    password: '',
    is_admin: false,
    adminID: ''
  }

  clickLogin(): any {
    const logDiagRef = this.loginDiag.open(LoginDiagBoxComponent, {
      width: '67vw',
      height: 'fit-content',
      data: {
        username: this.username,
        password: this.password,
        is_admin: this.is_admin,
        adminID: this.adminID
      }
    });
    return logDiagRef;
  }
}