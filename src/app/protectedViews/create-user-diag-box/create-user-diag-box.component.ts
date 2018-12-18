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
        <p>An easy-to-remember-username:</p>
        <input matInput placeholder="they can change it later" type="text" name="username" [(ngModel)]="user.username" required>
      </mat-form-field>
      <mat-form-field>
        <p>An easy-to-remember-password:</p>
        <input matInput placeholder="they should change it later" type="text" name="password" [(ngModel)]="user.password" required>
      </mat-form-field>
      <mat-form-field>
        <p>Your Admin Email:</p>
        <input matInput type="text" name="adminID" [(ngModel)]="user.adminID" required>
      </mat-form-field>
    </form>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()" color="warn">Cancel</button>
      <button mat-button (click)="submitted=false" color="accent">Create User</button>
    </div>
  </div>
  `,
  styleUrls: ['./create-user-diag-box.component.css']
})
export class CreateUserDiagBoxComponent {
  user = new UserData;

  
  constructor(
    private createDiagRef : MatDialogRef<CreateUserDiagBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public userData : UserData
  ) { }

  onCancel() : void {
    this.createDiagRef.close();
  }

}
