import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/common/header/header.component';
import { ProductComponent } from './pages/product/product.component';
import { SliderComponent } from './components/common/slider/slider.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductManagerComponent } from './pages/product-manager/product-manager.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    HomeComponent,
    SliderComponent,
    ProductListComponent,
    HomeComponent,
    LayoutComponent,
    DashboardLayoutComponent,
    DashboardComponent,
    ProductManagerComponent,
    PageNotFoundComponent,
    AddProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
