import { Component,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	AfterContentChecked,
	OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnDestroy,DoCheck,
						AfterContentInit, AfterContentChecked,
						AfterViewInit, AfterViewChecked {
  constructor() { }

  ngOnInit() {
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
