import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './shared/star.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
