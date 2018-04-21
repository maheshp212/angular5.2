import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formsubmit',
  templateUrl: './formsubmit.component.html',
  styleUrls: ['./formsubmit.component.css']
})
export class FormsubmitComponent implements OnInit {
	user:any = {};
  constructor() { }

  ngOnInit() {
  }

	login(){
		console.log(this.user);		
	}
}
