import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
	fname:string = 'qShoRE';
	age:number = 255;
	today:any = new Date();
	branch:any;
	rollno:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  	this.route.params
  	.subscribe((res) => {
  		console.log(res);

  		this.branch = res['branch'];
  		this.rollno = res['rollno'];
  	})

  }

}
