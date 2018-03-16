import { Component,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	AfterContentChecked,
	OnDestroy
} from '@angular/core';

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
  /*providers: [ActivatedRoute]*/
})
export class LifeCycleComponent implements OnInit, OnDestroy,DoCheck,
						AfterContentInit, AfterContentChecked,
						AfterViewInit, AfterViewChecked {
  
  fname:any;
  lname:any;
  age:any;
  constructor( private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((prm) => {
      console.log(prm);
      this.fname = prm['fname'];
      this.lname = prm['lname'];
      this.age = prm['age'];
    });



  	console.log('ngOnInit');
  }
 
  ngDoCheck(){ // will be get triggered for every chagne
  	console.log('ngDoCheck');
  }
  ngAfterViewInit(){
  	console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){ // will be get triggered for every chagne
  	console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
  	console.log('ngOnDestroy');
  }
  ngAfterContentInit(){
  	console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){ // will be get triggered for every chagne
  	console.log('ngAfterContentChecked');
  }
}
