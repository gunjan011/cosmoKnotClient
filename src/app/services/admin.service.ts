import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserData } from '../models/user';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `${localStorage.token}`,
  })
};


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private currentUserSubject: BehaviorSubject<UserData>;
  public currentUser: Observable<UserData>;
  is_admin: boolean = false;
  adminID: string

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<UserData>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): UserData {
    return this.currentUserSubject.value;
  }

  register(username, password, is_admin, adminID) {
    return this.http.post<any>(`https:/cosmoknotserver.herokuapp.com/user/register/admin`,{ UserData: username, password, is_admin, adminID } )
    .pipe(map(user => {
      if ( user && user ) {
        localStorage.setItem('token', user.sessionToken);
        localStorage.setItem('atoken', user.adminToken)
      }
      return user;
    }));
  }
  makeNew()  {
    return this.http.post<any>(`https:/cosmoknotserver.herokuapp.com/user/register/new_user`, httpOptions)
  }
  findAll() : Observable<UserData[]> {
    return this.http.get<UserData[]>(`https:/cosmoknotserver.herokuapp.com/user/sub-users`, httpOptions)
  }
  findOne(): Observable<UserData[]> {
    return this.http.get<UserData[]>(`https:/cosmoknotserver.herokuapp.com/user/sub-users/:id`, httpOptions)
  }
  deleteUser() {
    return this.http.delete<any>(`https:/cosmoknotserver.herokuapp.com/user/delete_account/:id`, httpOptions)
  }
  updateUser() {
    return this.http.put<any>(`https:/cosmoknotserver.herokuapp.com/user/update_account/:id`, httpOptions)
  }
}
