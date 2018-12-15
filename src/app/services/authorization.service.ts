import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { User } from '../models/user';
// import { Admin } from '../models/admin';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  // private usersURL = 'https://cosmoknotserver.herokuapp.com/user'

  // constructor(
  //   private http : HttpClient,
  //   private router : Router
  //   ) { }

  // registerAdmim(user : Admin):Observable<Admin>{  //username: string, password: string, is_admin: boolean, adminEmail: string
  //   return this.http.post<Admin>(`${this.usersURL}/register/admim`, user, httpOptions)
  //   .pipe(tap((user: Admin) => this.router.navigate([`/user-profile/${user.username}`])
  //   ))
  // }

  // registerUser(user : User):Observable<User>{  //username: string, password: string, is_admin: boolean, adminEmail: string
  //   return this.http.post<User>(`${this.usersURL}/register/new_user`, user, httpOptions)
  //   .pipe(tap((user: User) => this.router.navigate([`/myprofile/${user.username}`])
  //   ))
  // }

  // adminLogin(user : Admin) {
  //   return this.http.post<Admin>(`${this.usersURL}/login`, user, httpOptions)
  //     .pipe(map(user => {
  //       // login successful if there's a jwt token in the response
  //       if (user.sessionToken) {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('token', JSON.stringify(user));
  //         // this.currentUserSubject.next(user);
  //       } 
  //       return user;
  //     }
  //   ));
  // }
}
