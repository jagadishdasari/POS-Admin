import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/authServices/authservice.service';
import { SideNavService } from 'src/app/services/side-nav.service';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  opened!:Boolean;

  title! :any;
  adminname!: string | null;


  constructor(private tosaster:ToastrService,private auth :AuthserviceService ,private navService:SideNavService,private router:Router,private activeRoute:ActivatedRoute) {
    this.navService.isToggle(this.opened = !this.opened);
    // 
    
   }

  ngOnInit(): void {
    this.adminname=localStorage.getItem('adminname')
    
  }

  toggle(){
    this.navService.isToggle(this.opened = !this.opened)
 
  }
  ngDoCheck(){
    if(this.router.url === '/dashboard'  || this.router.url === '/'){
      this.title = 'Dashboard'
    }
    else if(this.router.url === '/add-stock'){
      this.title = 'Add Stock'
    }
    else if(this.router.url === '/stock-list'){
      this.title = 'Stock List'
    }
    else if(this.router.url === '/add-atm'){
      this.title = 'Add ATM'
    }
    else if(this.router.url === '/atm-list'){
      this.title = 'ATM List'
    }
    else if(this.router.url === '/transactions'){
      this.title = 'Transactions'
    }
   
  }
  logout(){
   this.auth.logout()

  }

}
