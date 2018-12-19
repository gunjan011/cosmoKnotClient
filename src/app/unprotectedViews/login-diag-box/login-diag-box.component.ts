import { Component, Inject } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActiveUserData } from '../../models/activeUser';
import { Router } from '@angular/router';
//import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
//import { UserData } from 'src/app/models/user';

@Component({
  selector: 'app-login-diag-box',
  template: `
  <h2 mat-dialog-title>Login to your Cosmoknot Account</h2>
  <div mat-dialog-content>
    <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
      <mat-form-field>
        <p>Your username:</p>
        <input matInput type="text" name="username" [(ngModel)]="user.username" required>
      </mat-form-field>
      <mat-form-field>
        <p>Your password:</p>
        <input matInput type="password" name="password" [(ngModel)]="user.password" required>
      </mat-form-field>
      <mat-slide-toggle (click)="loginAsAdmin()" name="is_admin" [(ngModel)]="user.is_admin">Are you an admin?</mat-slide-toggle>
      <mat-form-field *ngIf="user.is_admin===true">
        <p>Admin Email:</p>
        <input matInput type="text" name="adminID" [(ngModel)]="adminID" required>
      </mat-form-field>
    </form>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()" color="warn">Cancel</button>
      <button mat-button (click)="submitted=false" color="accent">Login</button>
    </div>
  </div>
  `,
  styleUrls: ['./login-diag-box.component.css']
})
export class LoginDiagBoxComponent {
  user: ActiveUserData = {
    username: '',
    password: '',
    is_admin: false,
    adminID: '',
    token: '',
    aToken: ''
  }
  private _loginForm: FormGroup;
  submitted: boolean;
  error = ''

  constructor(
    @Inject(MAT_DIALOG_DATA) public activeUser: ActiveUserData,
    private logDiagRef: MatDialogRef<LoginDiagBoxComponent>,
    private _auth: AuthorizationService,
    private _form: FormBuilder,
    private router: Router
  ) {
    this.createForm();
   }


  loginAsAdmin(checked) {
    (checked !== true) ? this.user.is_admin === false
      : (checked = true) ? this.user.is_admin === true
        : this.user.is_admin = false;
  }
  createForm() {
    this._loginForm = this._form.group({
      username: new FormControl,
      password: new FormControl,
      is_admin: false,
      adminID: 'jeff1@email.com'
    });
  }

  onSubmit() {
    console.log(this._loginForm.value)
    //this.loginAsAdmin(this.user)
    this._auth.login(this._loginForm.value)
  }

  onCancel(): void {
    console.log('cancelled')
    this.logDiagRef.close();
  }
}
