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
