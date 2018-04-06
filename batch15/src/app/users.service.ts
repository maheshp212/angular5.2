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

}
