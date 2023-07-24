import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  toggled: any;
  public toggle$: Subject<any> = new Subject;
  constructor() { }

  isToggle(data: any) {
    this.toggle$.next(data);
  }

  menus = [
    {
      title: 'Dashboard',
      icon: 'fa-solid fa-gauge',
      active: false,
      type: 'simple',
      routerLink: '/',
      routerOptions: {exact: true},
      
    },
     {
      title: 'Categories',
      icon: 'fa-solid fa-circle-info',
      active: false,
      type: 'dropdown',
      routerLink: '',
      routerOptions: {},
      
      submenus: [
        {
          title: 'Add Category',
      icon: 'fa-solid fa-list',
      active: false,
      type: 'simple',
      routerLink: 'add-category',
      routerOptions: {},
      role: 0,
        },
        {
          title: 'Category List',
          icon: 'fa-sharp fa-solid fa-table-list',
          active: false,
          type: 'simple',
          routerLink: 'categories',
          routerOptions: {},
          role: 0,
       },
    

      ]
    }

  ]

  getMenus() {
    return this.menus;
  }
  toggle() {
    this.toggled = !this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

}
