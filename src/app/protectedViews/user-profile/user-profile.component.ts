import { Component } from '@angular/core';
import { ActiveUserData, Token } from '../../models/activeUser';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent{
  public user : BehaviorSubject<ActiveUserData>

  constructor() { }


}
