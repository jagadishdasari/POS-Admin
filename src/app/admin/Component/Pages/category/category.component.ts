import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  
  styleUrls: ['./category.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class CategoryComponent {
  displayedColumns: any[] = ['id', 'name','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  catlist: any;

  ngAfterViewInit() {
    this.catlist.paginator = this.paginator;
  }
  constructor(private router:Router,private api:ApiService,private toastr:ToastrService){

  }

  ngOnInit(): void {
    this.catlists();
    }
    catlists() {
      this.api.get(`category`).subscribe((res: any) => {
        this.catlist = new MatTableDataSource(res); // Initialize the MatTableDataSource with the fetched data
        this.catlist.paginator = this.paginator; // Set the paginator for the data source
      });
    }
    deleteitem(id:any){
      this.api.delete(`category/${id}`).subscribe((res:any)=>{
        this.catlists()
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
    addcats(){
      this.router.navigate(['/add-category'])  

    }
}
export interface PeriodicElement {
  _id: any;

  categoryname: string;
}