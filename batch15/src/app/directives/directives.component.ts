import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
	fname = 'techss';
	fruits = ['kwiw','melon','berry'];
	count:number =0;

  constructor() { }

  ngOnInit() {
  }
  callMe(){
  	console.log(this.count);
  	this.count++;
  }

  dir(){
    alert('dir function invoked');
  }
}
