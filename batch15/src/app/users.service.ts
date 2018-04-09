import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http:Http) { }

  listUsers(){
  	return this.http.get('http://api.qshore.com/users')
  	.map((resp:Response) => {
  			console.log('##########');
  			console.log(resp);

  		return resp.json();
  	});
  }


  viewUser(uid){
 	var url = "http://api.qshore.com/view-user/"+uid;
  	return this.http.get(url)
  	.map((resp:Response) => {
  		return resp.json();
  	});
  }


  createUser(){
  		var apiUrl = 'http://api.qshore.com/add-user';
		var user = {

			fname: 'Mohan',
			lname:'Lal',
			age:23,
			email:'mohanlal@123',
			password:'lal123'
		}
		return this.http.post(apiUrl,user)
		.map((resp:Response) => {
			return resp.json();
		})
  }

  editUser(uid){
  		var apiUrl = 'http://api.qshore.com/edit-user/'+uid;
		var user = {
			fname: 'angualr',
			lname:'js',
			age:23,
			email:'updated@123',
			password:'upd123'
		}
		return this.http.put(apiUrl,user)
		.map((resp:Response) => {
			return resp.json();
		})
  }

  deleteUser(id){
  	var url = 'http://api.qshore.com/delete-user/'+id;
  	return this.http.delete(url)
		.map((resp:Response) => {
			return resp.json();

		})
  }

}
