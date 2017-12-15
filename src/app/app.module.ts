import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AboutComponent } from './components/about.component';
import { UserComponent }  from './components/user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AboutComponent ],
  bootstrap:    [ AboutComponent ]
})

export class AppModule { }
