import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse/*, HttpHeaders */} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApodResponse } from '../models/apod.response';
import { environment1 } from '../../environments/environment';

// const httpCorb = {
//   headers: new HttpHeaders({
//     'Content-Type' : 'text/html'
//   })
// }
@Injectable({
  providedIn: 'root'
})
export class ApodService {
  nasa_api_key1: string = environment1.nasa_api_key1;
  nasa_url =  `https://api.nasa.gov/planetary/apod?api_key=${this.nasa_api_key1}&date&count=1`;
  
  constructor(private httpClient: HttpClient) { }

 getPicture(): Observable<HttpResponse<ApodResponse[]>> {
    return this.httpClient.get<ApodResponse[]>(this.nasa_url, {observe: 'response'});
  }
}

