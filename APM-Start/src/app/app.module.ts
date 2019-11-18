import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    ProductModule,
    UserModule,
    MessageModule,
    RouterModule.forRoot([
     { path: 'welcome', component: WelcomeComponent}
    ,{ path: 'login', component: LoginComponent}
    ,{ path: 'products', component: ProductListComponent}
  ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
