import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'


import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormStatesComponent } from './form-states/form-states.component';
import { ObjectFormsComponent } from './object-forms/object-forms.component';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

//angular.modue('myAPp', [ngROuter])





/*$routeProvider
.when('/asdf', {
	templateUrl: '',
	controller: 
})
*/


const routes:Routes = [
	{path:'intro', component:IntroComponent},
  {path:'variables', component:VariablesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'form-states', component:FormStatesComponent},
  {path:'object-form', component:ObjectFormsComponent},
  {path:'pipes', component:PipesComponent},
	{path:'life-cycle', component:LifeCycleComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    FormStatesComponent,
    ObjectFormsComponent,
    AttrDirective,
    ClassDirective,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
