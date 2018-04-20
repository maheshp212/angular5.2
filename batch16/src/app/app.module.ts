import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'




import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';

const routes:Routes = [
    {path:'intro', component:IntroComponent},
    {path:'variables', component:VariablesComponent},
  ];
@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    VariablesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
