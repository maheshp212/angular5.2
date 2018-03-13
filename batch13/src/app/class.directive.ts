import { Directive, Input,OnInit } from '@angular/core';

@Directive({
  selector: '.appClass'
})
export class ClassDirective implements OnInit {
	@Input() tech;
    constructor() {
   }

   ngOnInit(){
  	console.log('custom direcitve of class got invoked :: ' + this.tech);
   	
   }
}
