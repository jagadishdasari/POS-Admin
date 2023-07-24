import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent {
 // number of items to display per page
 pageSize = 10;
 // current page number
 currentPage = 1;

stocklist: any;
searchValue: any;
showAll: any;
searchText:any;
atmdatas: any;
selectedid: any;
  catlists: any;
constructor(private router:Router,private api:ApiService,private toastr:ToastrService){

}
ngOnInit(): void {
this.getstocklist();
}
getstocklist(){
 this.api.get(`category?search=${this.searchValue}`).subscribe((res:any)=>{
this.stocklist=res;

 })
}
deleteitem(id:any){
  this.api.delete(`category/${id}`).subscribe((res:any)=>{
    this.getstocklist()
    this.toastr.success("Category Deleted Successfully");     
     },
    (error)=>{

      this.toastr.error(error.error.error.message);
    })
}
edititem(_id:any){
  localStorage.setItem('id',_id)
  if(localStorage.getItem('id')){
    this.router.navigate(['/edit-category'])  
  }
}
get calculatedPageSize(): number {
 return this.showAll ? this.stocklist.length : this.pageSize;
}
}
