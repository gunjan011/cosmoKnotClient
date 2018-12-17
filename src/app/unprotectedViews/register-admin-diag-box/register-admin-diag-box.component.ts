import { Component, Inject } from '@angular/core';
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
      <p>Your password:</p>
      <input matInput type="text" name="password" [(ngModel)]="user.password">
      <p>Admin Email:</p>
      <input matInput type="text" name="adminID" [(ngModel)]="user.adminID">
      </mat-form-field>
    </form>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-button (click)="submitted=false">Register Account</button>
    </div>
</div>`,
  styleUrls: ['./register-admin-diag-box.component.css']
})
export class RegisterAdminDiagBoxComponent{
  user = new AdminData
  submitted = false
  constructor(    
    private regDiagRef : MatDialogRef<RegisterAdminDiagBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public adminData : AdminData
  ) { }

  onSubmit() : void {
    this.submitted = true;
    if(this.submitted = true){
      this.regDiagRef.close();
    }
  }
  onCancel() : void {
    this.regDiagRef.close();
  }

}
