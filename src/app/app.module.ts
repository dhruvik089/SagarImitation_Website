import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componant/header/header.component';
import { FooterComponent } from './componant/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { contactUsComponent } from './pages/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailsByCategoryComponent } from './pages/product-details-by-category/product-details-by-category.component';
import { GoogleMapsModule } from "@angular/google-maps";
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    contactUsComponent,
    AboutComponent,
    ProductDetailsByCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
