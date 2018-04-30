import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycles',
  templateUrl: './life-cycles.component.html',
  styleUrls: ['./life-cycles.component.css']
})
export class LifeCyclesComponent implements OnInit, DoCheck,
					AfterContentInit, AfterContentChecked,
					AfterViewInit, AfterViewChecked, OnDestroy {
	fname:string;

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



  constructor() { 
  	console.log(' consturctor');
  }

  ngOnInit() {
  	console.log('ngOnInit');
  }

  /* it will be called repeatedly */
  ngDoCheck(){
  	console.log('ngDoCheck');

  }
  ngAfterViewInit(){
  	console.log('ngAfterViewInit');

  }
  /* it will be called repeatedly */
  ngAfterViewChecked(){
  	console.log('ngAfterViewChecked');

  }

  ngAfterContentInit(){
  	console.log('ngAfterContentInit');

  }

  /* it will be called repeatedly */
  ngAfterContentChecked(){
  	console.log('ngAfterContentChecked');

  }
  ngOnDestroy(){
  	console.log('ngOnDestroy');

  }


}
