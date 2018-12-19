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
      <form (ngSubmit)="onSubmit()" [formGroup] = "loginForm">
        <mat-form-field>
          <p>Your username:</p>
          <input matInput type="text" name="username" formControlName="username" required>
        </mat-form-field>
        <mat-form-field>
          <p>Your password:</p>
          <input matInput type="password" name="password" formControlName="password" required>
        </mat-form-field>
        <button mat-button (click)="onCancel()" color="warn">Cancel</button>
        <button mat-button  type="submit" color="accent">Login</button>
      </form>
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
  private loginForm: FormGroup;
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
    this.loginForm = this._form.group({
      username: new FormControl,
      password: new FormControl,
      is_admin: false,
      adminID: 'jeff1@email.com'
    });
  }

  onSubmit() {
    console.log(this.loginForm.value)
    //this.loginAsAdmin(this.user)
    this._auth.login(this.loginForm.value)
  }

  onCancel(): void {
    console.log('cancelled')
    this.logDiagRef.close();
  }
}
