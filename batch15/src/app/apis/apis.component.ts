import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {
  listUsers:any;
  userInfo:any;
  constructor(private users:UsersService) { }

  ngOnInit() {
  	this.users.listUsers()
  	.subscribe((resp)=> {
  		console.log('***********');
  		console.log(resp);
      this.listUsers = resp.data;
  	})
  }

  viewUser(uid){

    this.users.viewUser(uid)
    .subscribe((r)=>{
      console.log(r);
      this.userInfo = r.data;
    })
  }

  createUser(){
    this.users.createUser()
    .subscribe((res)=>{
      this.userInfo = res.data;

      // after create im updating the list
      this.users.listUsers()
      .subscribe((resp)=> {
        this.listUsers = resp.data;
      })
    })
  }

  editUser(uid){
    this.users.editUser(uid)
    .subscribe((res)=>{
      this.userInfo = res.data;

      // after create im updating the list
      this.users.listUsers()
      .subscribe((resp)=> {
        this.listUsers = resp.data;
      })
    })
  }
  deleteUser(uid){
    this.users.deleteUser(uid)
    .subscribe((res)=>{
      this.userInfo = res.data;

      // after create im updating the list
      this.users.listUsers()
      .subscribe((resp)=> {
        this.listUsers = resp.data;
      })
    })
  }

}
