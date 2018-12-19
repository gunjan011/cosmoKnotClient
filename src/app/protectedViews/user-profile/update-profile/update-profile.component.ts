import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProfileService } from '../../../services/profile.service';

export class UserUpdate{
  username? : string;
  password? : string
}

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent{
  user_props = new UserUpdate

  private newUsername : string;
  private newPass : string;
  submitted = false;
 

  constructor(
    private profile : ProfileService
  ) { }


  onUpdate(): void/*BehaviorSubject<ActiveUserData>*/{
    // if(this.submitted === true){
    //   return this.profile.put<BehaviorSubject<ActiveUserData>>(

    //   )
    // }
  }
 
}

