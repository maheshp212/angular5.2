import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
	fname:string = 'qshore';
	lname:string = "tech";

	age:number = 23;
	gender:boolean = true;
	intrst:null = null;
	fruits:string[];
	user:any = {name:'angular', tech:'js'};

  constructor() {
  	this.fruits = ['kiwi', 'melon', 'berry'];
   }

  ngOnInit() {
  }

}
