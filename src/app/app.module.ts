import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { SecondComponent } from './second.component';
import { CourseDetailsComponent } from './coursedetails.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,SecondComponent,CourseDetailsComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
