import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formevents',
  templateUrl: './formevents.component.html',
  styleUrls: ['./formevents.component.css']
})
export class FormeventsComponent implements OnInit {

  constructor() { }
  count:number = 0;
  fname:string;

  ngOnInit() {
  }

  callMe(){
  	console.log(this.count);
  	this.count++;
  }
}
