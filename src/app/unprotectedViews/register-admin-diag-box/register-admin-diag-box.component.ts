import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
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
      <button mat-button (click)="onSubmit()" type="submit" color="accent">Register Account</button>
    </div>
</div>`,
  styleUrls: ['./register-admin-diag-box.component.css']
})
export class RegisterAdminDiagBoxComponent {
  user: AdminData = {
    username: '',
    password: '',
    is_admin: false,
    adminID: ''

  };
  loginForm: JSON;
  submitted: boolean;
  error = ''


  constructor(
    @Inject(MAT_DIALOG_DATA) public activeUser: AdminData,
    private logDiagRef: MatDialogRef<RegisterAdminDiagBoxComponent>,
    private auth: AdminService,
    private router: Router
  ) { }

  register(username, password, is_admin, adminID) {
    this.auth.register(username, password, is_admin, adminID)
      .subscribe(
        data => {
          this.router.navigate(['myprofile'])
        },
        error => {
          this.error = error;
        });
  }

  loginAsAdmin(checked) {
    (checked !== true) ? this.user.is_admin === false
      : (checked == true) ? this.user.is_admin === true
        : this.user.is_admin = false;
  }

  onSubmit() {
    this.loginAsAdmin(this.user)
    this.auth.register(
      this.user.username,
      this.user.password,
      this.user.is_admin,
      this.user.adminID)
      .subscribe(res => {
        console.log(res)
      })
  }
  onCancel(): void {
    this.logDiagRef.close();
  }
}
