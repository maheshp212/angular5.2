import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

	name:string;
	pid:string;
  constructor(private routes:ActivatedRoute) {}

  	ngOnInit(){
	  this.routes.params
  		.subscribe((p)=>{
  			this.name = p['name'];
  			this.pid = p['pid'];
  			console.log(p);
  		});
  	}


	intr(){
		alert('intr function invoked');
	}
}
