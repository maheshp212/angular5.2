import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-forms',
  templateUrl: './object-forms.component.html',
  styleUrls: ['./object-forms.component.css']
})
export class ObjectFormsComponent implements OnInit {
	lg:any = {};
  constructor() { }

  ngOnInit() {
  }

  login(){
  	console.log(this.lg);
  }

}
