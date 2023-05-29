import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './page/admin/admin.component';
import { ProductsAddComponent } from './page/products-add/products-add.component';
import { ProductsEditComponent } from './page/products-edit/products-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductsAddComponent,
    ProductsEditComponent
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
