import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/services/side-nav.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({height: 0})),
      state('down', style({height: '*'})),
      transition('up <=> down', animate(200)),
    ])
  ]
})
export class SideNavComponent implements OnInit {

menus:any;

roleId: number=0;
orgMenus = [];
// orgType: number;
remove: boolean = true;

  constructor(private sideNavService:SideNavService) { 
    this.menus = this.sideNavService.getMenus();
  }
  // toggle nav

  togglea() {
    if (this.remove == false) {
      this.remove = true;
    } else {
      this.remove = false;
    }
  }

// end
  getSideBarState() {
    return this.sideNavService.getSidebarState();
  }

  ngOnInit(): void {
  }
  toggle(currentMenu:any) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach((element: { active: boolean; }) => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }
  getState(currentMenu:any) {
    if(currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }  
}
