import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserData } from '../models/user';


const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  private currentUserSubject: BehaviorSubject<UserData>;
  public currentUser: Observable<UserData>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<UserData>(JSON.parse(localStorage.getItem('sessionToken')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserData {
    return this.currentUserSubject.value;
}

  login(username: string, password: string, is_admin: boolean, adminID: string) {
    return this.http.post<any>(`https://cosmoknotserver.herokuapp.com/user/login`, {user: {username, password, is_admin, adminID }})
    // return this.http.post<any>(`http://localhost:3000/user/login`, {user: {username, password }})
    .pipe(map(user => {
    
      if (user && user) {
          localStorage.setItem('token', user.sessiontoken);
          localStorage.setItem('atoken', user.adminToken)
          localStorage.setItem('user', user.user);
          // localStorage.setItem('userID', user.id);
      }

      return user;
  }));
}
   
logout() {
  localStorage.removeItem('sessionToken');
}
}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
// // import { User } from '../models/user';
// // import { Admin } from '../models/admin';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
// };

// @Injectable({
//   providedIn: 'root'
// })
//export class AuthorizationService {
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
//}
