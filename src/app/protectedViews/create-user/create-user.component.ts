import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateUserDiagBoxComponent } from '../create-user-diag-box/create-user-diag-box.component';

export interface AdminData{
  username : string;
  password : string;
  is_admin : boolean;
  adminID : string;
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public username : string;
  public password : string;
  public is_admin = false;
  public adminID : string;

  constructor(public newUserDiag : MatDialog) { }

  clickNewUser(): any {
      const createDiagRef = this.newUserDiag.open(CreateUserDiagBoxComponent, {
        width : '67vw',
        height : 'fit-content',
        data : {
            username : this.username,
            password : this.password,
            is_admin : this.is_admin,
            adminID : this.adminID
        }
      });
      return createDiagRef;
  }

}