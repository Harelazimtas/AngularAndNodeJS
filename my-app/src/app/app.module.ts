import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActionComponent } from './action/action.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { GetAllItemsComponent } from './get-all-items/get-all-items.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ActionComponent,
    UpdateItemComponent,
    GetAllItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
