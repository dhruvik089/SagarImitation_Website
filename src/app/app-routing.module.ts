import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { contactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductDetailsByCategoryComponent } from './pages/product-details-by-category/product-details-by-category.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'contact',
    component:contactUsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }, 
  {
    path: 'product/:categoryName',
    component: ProductDetailsByCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
