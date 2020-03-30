import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AmexioDataModule} from 'amexio-ng-extensions';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTE} from "./app.routes";

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  AmexioDataModule,
                  RouterModule.forRoot(APP_ROUTE, { useHash: true })],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
