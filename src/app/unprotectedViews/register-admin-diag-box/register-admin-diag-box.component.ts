import { Component, Inject } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminData } from '../../models/admin';

@Component({
  selector: 'app-register-admin-diag-box',
  template: `
  <h2 mat-dialog-title>Register a Cosmoknot Admin Account</h2>
  <div mat-dialog-content>
    <form #registerForm="ngForm" (ngSubmit)="onSubmit()">
      <mat-form-field>
        <p>Your username:</p>
        <input matInput type="text" name="username" [(ngModel)]="user.username">
      </mat-form-field>
      <mat-form-field>
        <p>Your password:</p>
        <input matInput type="text" name="password" [(ngModel)]="user.password">
      </mat-form-field>
      <mat-form-field>
        <p>Admin Email:</p>
        <input matInput type="text" name="adminID" [(ngModel)]="user.adminID">
      </mat-form-field>
    </form>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()" color="warn">Cancel</button>
      <button mat-button (click)="submitted=false" color="accent">Register Account</button>
    </div>
</div>`,
  styleUrls: ['./register-admin-diag-box.component.css']
})
export class RegisterAdminDiagBoxComponent{
  user = new AdminData;
  loginForm : JSON; 
  submitted : boolean;


  constructor(
    @Inject(MAT_DIALOG_DATA) public activeUser : AdminData,
    private logDiagRef : MatDialogRef<RegisterAdminDiagBoxComponent>,
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
        this.activeUser
      )
    }
    this.ifSubmit()
  }

  ifSubmit(): void {
    if(this.submitted = true){
      this.logDiagRef.close();
    }
  }

  onCancel(): void {
    this.logDiagRef.close();
  }


}
