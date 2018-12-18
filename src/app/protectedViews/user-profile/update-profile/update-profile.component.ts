import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActiveUserData } from 'src/app/models/activeUser';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent{

  user = new ActiveUserData
  

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
