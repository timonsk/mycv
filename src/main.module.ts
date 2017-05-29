import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule, MdButtonModule } from "@angular/material";

import { AppComponent } from 'components/app/app.component';
import { HeroComponent } from 'components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MainModule { }
