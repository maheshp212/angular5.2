import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http:Http) { }

  listUsers(){
  	return this.http.get('http://api.qshore.com/users')
  	.map((res:Response) => {
  		//console.log(res);
  		return res.json();
  	})
  }


  viewUser(uid){
  	return this.http.get('http://api.qshore.com/view-user/'+uid)
  	.map((res:Response) => {
  		//console.log(res);
  		return res.json();
  	})
  }


    createUser(){
    	var url = 'http://api.qshore.com/add-user';
    	var data = {
    		fname: 'Mohan',
			lname:'Lal',
			age:23,
			email:'mohanlal@123',
			password:'lal123',
    	};
  	return this.http.post(url, data)
  	.map((res:Response) => {
  		//console.log(res);
  		return res.json();
  	})
  }

}
