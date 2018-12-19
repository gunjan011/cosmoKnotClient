import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActiveUserData } from '../models/activeUser';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http : HttpClient
  ) { }
}
