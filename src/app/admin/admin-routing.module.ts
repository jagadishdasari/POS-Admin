import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from '../admin/Component/Pages/dashboard/dashboard.component';
import { ProductComponent } from '../admin/Component/Pages/product/product.component';
import { CategoryComponent } from './Component/Pages/category/category.component';
import { AddCategoryComponent } from './Component/Pages/category/add-category/add-category.component';
import { EditCategoryComponent } from './Component/Pages/category/edit-category/edit-category.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children :[
      {
        path : "",
        component : DashboardComponent
      },
      {
        path : "product",
        component : ProductComponent
      },
      {
        path : "category",
        component : CategoryComponent
      },
      {
        path : "add-category",
        component : AddCategoryComponent
      },
      {
        path : "edit-category",
        component : EditCategoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
