import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService {

  constructor(private http:Http) { }

  listUsers(){
  	return this.http.get('http://api.qshore.com/users')
  	.map( (resp:Response) => {
  	
  		console.log(resp);
  		return resp.json();
  	});
  }

  viewUser(id){
  	var url= "http://api.qshore.com/view-user/"+id
  	return this.http.get(url)
  	.map( (resp:Response) => {
  		return resp.json();
  	});
  }


  createUser(){
  	var url= "http://api.qshore.com/add-user";
  	var user = {
  		fname: 'Mohan',
		lname:'Lal',
		age:23,
		email:'mohanlal@123',
		password:'lal123',
  	};
  	return this.http.post(url, user)
  	.map( (resp:Response) => {
  		return resp.json();
  	});
  }


  editUser(uid){
  	var url= "http://api.qshore.com/edit-user/"+uid;
  	var user = {
  		fname: 'Mohan upd',
		lname:'Lal',
		age:23,
		email:'qhosre@123',
		password:'lal123',
  	};
  	return this.http.put(url, user)
  	.map( (resp:Response) => {
  		return resp.json();
  	});
  }

  deleteUser(uid){
  	var url= "http://api.qshore.com/delete-user/"+uid;
  	return this.http.delete(url)
  	.map( (resp:Response) => {
  		return resp.json();
  	});
  }
}
