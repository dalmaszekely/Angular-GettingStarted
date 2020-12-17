import { WelcomeComponent } from './home/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './shared/star.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
