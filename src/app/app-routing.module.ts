import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './authLayouts/login/login.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { DashboardComponent } from './all-pages/dashboard/dashboard.component';



// categories
import { AddCategoriesComponent } from './all-pages/categories/add-categories/add-categories.component';
import { ListCategoriesComponent } from './all-pages/categories/list-categories/list-categories.component';
import { EditCategoriesComponent } from './all-pages/categories/edit-categories/edit-categories.component';



import { LocationStrategy, PathLocationStrategy } from '@angular/common';


const routes: Routes = [
  
  {path:'login',component:LoginComponent, pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthguardGuard],
    children: [
  { path: '', component: DashboardComponent},

  // categories routings
  { path: 'add-category', component: AddCategoriesComponent},
  { path: 'edit-category', component: EditCategoriesComponent},
  { path: 'categories', component:ListCategoriesComponent },
  
  ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: false })],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
