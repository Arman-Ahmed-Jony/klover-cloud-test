import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {path: 'product-list', component: ProductListComponent}
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
