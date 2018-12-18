import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JournalEntry } from '../models/journal-entry';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})


export class JournalEntryService {

constructor(private http: HttpClient) { }

  getjournalentry(journalentry: any): Observable<JournalEntry[]> {
    return this.http.get<JournalEntry[]>(`https://cosmoknotserver.herokuapp.com/user/userposts/`, httpOptions)
  }
  deletejournalentry(id: any): Observable<JournalEntry> {
    return this.http.delete<JournalEntry>(`https://cosmoknotserver.herokuapp.com/user/userposts/delete/${id}`, httpOptions)
  }
  editjournalentry(id: any): Observable<JournalEntry> {
    return this.http.put<JournalEntry>(`https://cosmoknotserver.herokuapp.com/user/userposts/edit/${id}`, httpOptions)
  }
  createjournal(user, title, entry) {
    return this.http.post<any>(`https://cosmoknotserver.herokuapp.com/user/new_post/`, { JournalEntry: {  user, title, entry } })
  }
}