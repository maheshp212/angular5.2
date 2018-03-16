import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'
import {HttpModule} from '@angular/http'

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
import { ApisComponent } from './apis/apis.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

//angular.modue('myAPp', [ngROuter])





/*$routeProvider
.when('/asdf', {
	templateUrl: '',
	controller: 
})
*/


const routes:Routes = [
  {path:'', component:HomeComponent},
	{path:'intro', component:IntroComponent},
  {path:'variables', component:VariablesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'form-states', component:FormStatesComponent},
  {path:'object-form', component:ObjectFormsComponent},
  {path:'pipes', component:PipesComponent},
  {path:'life-cycle/:fname/:lname/:age', component:LifeCycleComponent},
  {path:'api', component:ApisComponent},
	{path:'**', component:NotfoundComponent},

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
    LifeCycleComponent,
    ApisComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
