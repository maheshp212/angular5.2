import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
	fname:string = 'qshore';
	age:number;
	fruits:string[];
  
  constructor() {
  	this.age = 501;
  	this.fruits = ['kiwi', 'berry', 'melon'];
   }

  ngOnInit() {
  }
  priyanka(){
    console.log('this is component specific directive....');
  }
}
