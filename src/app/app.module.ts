import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/jwt.interceptor';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from  'ng-otp-input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from "angular-datatables";
import { jqxChartModule } from 'jqwidgets-ng/jqxchart'; 
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './core/side-nav/side-nav.component';
import { TopNavComponent } from './core/top-nav/top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './all-pages/dashboard/dashboard.component';
import { LoginComponent } from './authLayouts/login/login.component';

import { SearchFilterPipe } from './search-filter.pipe';
import { FilterPipePipe } from './filter-pipe.pipe';

import { AddCategoriesComponent } from './all-pages/categories/add-categories/add-categories.component';
import { ListCategoriesComponent } from './all-pages/categories/list-categories/list-categories.component';
import { EditCategoriesComponent } from './all-pages/categories/edit-categories/edit-categories.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideNavComponent,
    TopNavComponent,
    DashboardComponent,
    LoginComponent,
    SearchFilterPipe,
    FilterPipePipe,
    AddCategoriesComponent,
    ListCategoriesComponent,
    EditCategoriesComponent,
   
   
     
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  HttpClientModule,
  FormsModule,
  NgOtpInputModule,
  DataTablesModule,
  jqxChartModule,
  NgxPaginationModule,

 
  ToastrModule.forRoot({
    timeOut: 2000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
  }),
 
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
