import { Component } from '@angular/core';
import { ApodService } from '../../services/apod.service';
import { ApodResponse } from '../../models/apod.response';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent {
  response = new BehaviorSubject<ApodResponse[]>([]);
  headers = []
  dates = []
  count = 1
  testArray = []

  constructor(private apodService: ApodService) {

    this.apodService.getPicture()
      .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);

        Object.keys(resp.body).forEach(key => {

          this.response.next(resp.body[key]);
          this.testArray.push(resp.body[key]);
        });
      });
    this.getHD_Image()
    console.log(this.testArray)
  }

  getHD_Image() {
    console.log(this.response)

    return this.dates
  }
 
}
