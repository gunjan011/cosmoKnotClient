import { Component, Inject, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA, MatSlideToggle } from '@angular/material';
import { ActiveUserData } from '../../models/activeUser';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-login-diag-box',
  template: `
    {{ diagnostic }}
    <h2 mat-dialog-title>Login to your Cosmoknot Account</h2>
    <div mat-dialog-content>
      <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
        <mat-form-field>
          <p>Your username:</p>
          <input matInput type="text" name="username" [(ngModel)]="user.username">
          <p>Your password:</p>
          <input matInput type="password" name="password" [(ngModel)]="user.password">
          <mat-slide-toggle (click)="loginAsAdmin()" name="is_admin" [(ngModel)]="user.is_admin">Are you an admin?</mat-slide-toggle>
        </mat-form-field>
        <mat-form-field *ngIf="user.is_admin===true">
          <p>Admin Email:</p>
          <input matInput type="text" name="adminID" [(ngModel)]="adminID">
        </mat-form-field>
      </form>
      <div mat-dialog-actions>
        <button mat-button (click)="onCancel()">Cancel</button>
        <button mat-button (click)="submitted=false">Login</button>
      </div>
    </div>
  `,
  styleUrls: ['./login-diag-box.component.css']
})
export class LoginDiagBoxComponent {
  user = new ActiveUserData
  // sessionToken : string
  

  constructor(
    private logDiagRef : MatDialogRef<LoginDiagBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public activeUser : ActiveUserData,
   
    // private token : SessionTokenService
    ) { }
    
    
    loginAsAdmin(checked){
      (checked !== true) ? this.user.is_admin === false
      : (checked = true) ? this.user.is_admin === true
      : this.user.is_admin = false;
    }
    
  
  onCancel() : void {
    this.logDiagRef.close();
  }

}
