import { Component, OnInit } from '@angular/core';
import { JournalEntryService } from '../../services/journal-entry.service';
import { JournalEntry } from 'src/app/models/journal-entry';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  noteForm: FormGroup;

  constructor(private _noteService: JournalEntryService, private _form: FormBuilder, private _router: Router) { this.createForm();
  }
  ngOnInit() {
  }

  createForm() {
    this.noteForm = this._form.group({
      user: new FormControl,
      title: new FormControl,
      entry: new FormControl,
  });
  }

  onSubmit(){
    this._noteService.createjournal(this.noteForm.value.user, this.noteForm.value.title, this.noteForm.value.entry).subscribe(data => { 
      this._router.navigate(['/notes']);
    });
  }
}