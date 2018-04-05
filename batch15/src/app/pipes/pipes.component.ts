import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
	age=34;
	fname= 'qsHoRE';
	today:any = new Date();
	user:any = {name:'angu' , tech:'js'};
  constructor() { }

  ngOnInit() {
  }

}
