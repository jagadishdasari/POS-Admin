import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
stocklist: any;
  bannerscount: any;
  stockList: any;
  bannersCount: any;
  catlist: any;
  catcount: any;
  productlist: any;
  procount: any;
  giftlist: any;
  giftcount: any;
  banlist: any;
  bancount: any;
  userslist: any;
  usercount: any;
  merchantlist: any;
  merchantcount: any;


constructor(private api:ApiService){

}
ngOnInit(){
  this.dashboarddata();

}
dashboarddata(){

//  banner count
this.api.get('banners').subscribe((res: any) => {
  this.stockList = res.output;
  this.bannerscount = this.stockList.length;
});

//  Category count
this.api.get('category').subscribe((res: any) => {
  this.catlist = res.output;
  this.catcount = this.catlist.length;
});

//  Products count
this.api.get('product').subscribe((res: any) => {
  this.productlist = res.output;
  this.procount = this.productlist.length;
});

//  Giftcard count
this.api.get('giftCard').subscribe((res: any) => {
  this.giftlist = res.output;
  this.giftcount = this.giftlist.length;
});

//  Banners count
this.api.get('banners').subscribe((res: any) => {
  this.banlist = res.output;
  this.bancount = this.banlist.length;
});
// users
this.api.get(`users`).subscribe((res:any)=>{
  this.userslist = res.output;
  this.usercount = this.userslist.length;
  })
// Merchants
this.api.get(`merchantusers`).subscribe((res:any)=>{
  this.merchantlist = res.output;
  this.merchantcount = this.merchantlist.length;
  })
}

}
