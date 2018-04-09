import { Component,
	OnInit,
	OnDestroy,
	DoCheck,
	AfterViewInit,
	AfterViewChecked,
	AfterContentInit,
	AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnDestroy,DoCheck,
	AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {



    settings = {
          columns: {
            id: {
              title: 'ID'
            },
            name: {
              title: 'Full Name'
            },
            username: {
              title: 'User Name'
            },
            email: {
              title: 'Email'
            },
            femail: {
              title: 'FEmail'
            }
          }
        };


data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },
  
  // ... list of items
  
  {
    id: 11,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
];



  constructor() { }
  ngOnInit() {
  	console.log('ngOnInit');


  }
  ngOnDestroy(){
  	console.log('ngOnDestroy');
  }
  ngAfterContentInit(){
  	console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){ //dont use this method its get invoked repetedly
  	console.log('ngAfterContentChecked');
  }
	  ngAfterViewInit(){
  	console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){ //dont use this method its get invoked repetedly
  	console.log('ngAfterViewChecked');
  }
  ngDoCheck(){ //dont use this method its get invoked repetedly
  	console.log('ngDoCheck');
  }


}
