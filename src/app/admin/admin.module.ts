import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../admin/Component/Pages/dashboard/dashboard.component';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddCategoryComponent } from './Component/Pages/category/add-category/add-category.component';
import { EditCategoryComponent } from './Component/Pages/category/edit-category/edit-category.component';
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AddCategoryComponent,
    EditCategoryComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatRippleModule,
    MatMenuModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    
   
    
  ] ,exports: [
  ],
})
export class AdminModule { }
