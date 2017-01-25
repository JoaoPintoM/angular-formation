import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ProductComponentComponent,
    MySortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
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
