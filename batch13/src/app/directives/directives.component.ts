import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
	fname:string;
	lname:string;
	age:number;
	fruits:string[];
	count:number = 0;
  constructor() { 
  	this.fname = 'jssss';
  	this.lname  = "tech";
  	this.age = 34;
  	this.fruits = ['kiwi', 'orange', 'melone'];
  }

  ngOnInit() {
  }

  callMe(){
  	console.log(this.count);
  	this.count++
  }
  dircLogic(){
    alert('custom directive componenet logic');
  }
}
