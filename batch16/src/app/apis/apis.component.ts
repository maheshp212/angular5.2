import { Component, OnInit } from '@angular/core';
import {UsersService} from  './../users.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers:[UsersService]
})
export class ApisComponent implements OnInit {
	listusers:any;
	userInfo:any;
  constructor(private users:UsersService) { }

  ngOnInit() {
  	console.log('*************');
  	this.users.listUsers()
  	.subscribe((res) => {
  		console.log('##############');
  		console.log(res);
  		this.listusers = res.data;
  	});
  }

  viewUser(uid){
  	this.users.viewUser(uid)
  	.subscribe((res) => {
  		console.log('##############');
  		console.log(res);
  		this.userInfo = res.data;
  	});
  }


  createUser(){
  	this.users.createUser()
  	.subscribe((res) => {
  		console.log('##############');
  		console.log(res);
  		this.userInfo = res.data;

  		this.users.listUsers()
	  	.subscribe((res) => {
	  		console.log('##############');
	  		console.log(res);
	  		this.listusers = res.data;
	  	});
  	});
  }
}
