import { Component, OnInit } from '@angular/core';
import { RunEvent } from './eventModel';

@Component({
  selector: 'app-newevent-form',
  templateUrl: './newevent-form.component.html',
  styleUrls: ['./newevent-form.component.css']
})
export class NeweventFormComponent implements OnInit {
runevent: RunEvent = {
name: "",
place: "",
distance: 0,
day: new Date()
}

  constructor() { }

  ngOnInit() {
  }

}
