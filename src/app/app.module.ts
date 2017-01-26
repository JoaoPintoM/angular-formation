import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { PeopleServiceService } from './people-service.service';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import { UpperCasePipe } from '@angular/common';
import { MySortPipe } from './pipes/my-sort.pipe';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basket',  component: BasketComponent },
  { path: 'basket/:id', component: BasketComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ProductComponentComponent,
    MySortPipe,
    HomeComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductService,
    CustomerService,
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    UpperCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
