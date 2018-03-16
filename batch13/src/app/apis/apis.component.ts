import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {

	users:any;
	userInfo:any;
  constructor(private user:UsersService) { }

  ngOnInit() {
  	this.listusers();
  }

  listusers(){
  	this.user.listUsers()
  	.subscribe((res) => {
		console.log(res);
		this.users = res.data;
	});
  }
  viewUser(uid){
  	this.user.viewUser(uid)
  	.subscribe((res) => {
		this.userInfo = res.data;
	});
  }

	createUser(){
		this.user.createUser()
	  	.subscribe((res) => {
			this.userInfo = res.data;
			this.listusers();
			/*this.user.listUsers()
		  	.subscribe((res) => {
				console.log(res);
				this.users = res.data;
			});*/
		});
	}

	editUser(uid){
		this.user.editUser(uid)
	  	.subscribe((res) => {
			this.userInfo = res.data;

			this.user.listUsers()
		  	.subscribe((res) => {
				console.log(res);
				this.users = res.data;
			});
		});
	}

	deleteUser(uid){
		this.user.deleteUser(uid)
	  	.subscribe((res) => {
			this.userInfo = res.data;

			this.user.listUsers()
		  	.subscribe((res) => {
				console.log(res);
				this.users = res.data;
			});
		});
	}
}
