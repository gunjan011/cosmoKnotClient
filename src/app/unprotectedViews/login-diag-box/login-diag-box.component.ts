import { Component, Inject } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActiveUserData } from '../../models/activeUser';

@Component({
  selector: 'app-login-diag-box',
  template: `
    {{ diagnostic }}
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
  user = new ActiveUserData
  loginForm : JSON; 
  submitted : boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public activeUser : ActiveUserData,
    private logDiagRef : MatDialogRef<LoginDiagBoxComponent>,
    private auth : AuthorizationService,
  ) { }
  
  loginAsAdmin(checked){
    (checked !== true) ? this.user.is_admin === false
    : (checked = true) ? this.user.is_admin === true
    : this.user.is_admin = false;
  }
    
  onSubmit(): void {
    if(this.loginForm !== null){
      this.auth.login(
        this.user
      )
    }
    this.ifSubmit()
  }

  ifSubmit(): void {
    this.submitted = true
    if(this.submitted = true){
      this.logDiagRef.close();
    }
  }

  onCancel(): void {
    this.logDiagRef.close();
  }

}
