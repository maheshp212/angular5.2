import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'



import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormeventsComponent } from './formevents/formevents.component';
import { FormStatesComponent } from './form-states/form-states.component';
import { FormsubmitComponent } from './formsubmit/formsubmit.component';
import { PipesComponent } from './pipes/pipes.component';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { HexaPipe } from './hexa.pipe';
import { AddParmasPipe } from './add-parmas.pipe';

const routes:Routes = [
    {path:'intro', component:IntroComponent},
    {path:'variables', component:VariablesComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'form-events', component:FormeventsComponent},
    {path:'form-states', component:FormStatesComponent},
    {path:'form-submit', component:FormsubmitComponent},
    {path:'pipes', component:PipesComponent},
  ];


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    FormeventsComponent,
    FormStatesComponent,
    FormsubmitComponent,
    PipesComponent,
    AttrDirective,
    ClassDirective,
    HexaPipe,
    AddParmasPipe
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
