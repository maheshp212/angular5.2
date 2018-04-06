import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {

  constructor(private users:UsersService) { }

  ngOnInit() {
  	this.users.listUsers()
  	.subscribe((resp)=> {
  		console.log('***********');
  		console.log(resp);
  	})
  }

}
