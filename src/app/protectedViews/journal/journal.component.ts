import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.location.back();
  }

  onSubmit(){}
}