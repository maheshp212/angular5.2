import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

	fname:string = 'qshore';
	lname:string = "tech";
	age:number = 34;
	fruits:string[] = ['kiwi', 'orange', 'melone'];
	user:any = {name:'angular', exp:5};
 	gender:boolean = true;
 	inrest:null = null
  constructor() { }

  ngOnInit() {
  }

}
