import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterAdminDiagBoxComponent } from '../register-admin-diag-box/register-admin-diag-box.component';
import { AdminData } from '../../models/admin';

export interface AdminData{
  username : string;
  password : string;
  is_admin : boolean;
  adminID : string;
}

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent{
  
  public username : string;
  public password : string;
  public is_admin = true;
  public adminID : string;
  
  constructor(public registerDiag : MatDialog) { }
  user = new AdminData

  clickRegister(): any {
    const regDiagRef = this.registerDiag.open(RegisterAdminDiagBoxComponent, {
      width : '67vw',
      height : 'fit-content',
      data : {
          username : this.username,
          password : this.password,
          is_admin : this.is_admin,
          adminID : this.adminID
      }
    });
    return regDiagRef;
  }

}