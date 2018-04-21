import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {
	fname:string = 'qshore';
	lname:string = 'tech';
	age:number = 34;
	fruits:string[] = ['tech' , 'kiwi', 'orange'];
	user:any = {field:'tech', show:'hellow'};
	intrst:null = null;
	gender:boolean = true;
	undf;

	a:number;
	b:number;

	constructor(){
		this.a = 5;
		this.b = 6;
	}

	login(){
		console.log('this is variable component direvyiv..');
	}
}
