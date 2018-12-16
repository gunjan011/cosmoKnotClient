import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UserData } from '../../models/user';

@Component({
  selector: 'app-create-user-diag-box',
  template: `
  <h2 mat-dialog-title>Create a new user to track on Cosmoknot</h2>
  <div mat-dialog-content>
    <form #newUserForm="ngForm" (ngSubmit)="onSubmit()">
      <mat-form-field>
        <label>An easy-to-remember-username (they can change it later):
          <input matInput type="text" name="username" [(ngModel)]="user.username">
        </label>
        <p>An easy-to-remember-password (they can change it later):</p>
        <input matInput type="text" name="password" [(ngModel)]="user.password">
        <p>Your Admin Email:</p>
        <input matInput type="text" name="adminID" [(ngModel)]="user.adminID" required>
      </mat-form-field>
    </form>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-button (click)="submitted=false">Create User</button>
    </div>
  </div>
  `,
  styleUrls: ['./create-user-diag-box.component.css']
})
export class CreateUserDiagBoxComponent {
  user = new UserData
  
  constructor(
    private createDiagRef : MatDialogRef<CreateUserDiagBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public userData : UserData
  ) { }

  onCancel() : void {
    this.createDiagRef.close();
  }

}
