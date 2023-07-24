import { Component } from '@angular/core';
import {FormControl, AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent {

  spinner:boolean=false;
  spanhide:boolean=true;
  submitted:boolean = false;
  response: any;
  atmid: any;
  selectedatmid: any;
  data: any;
  atmids: any;
  localStorage: any;
  adminname!: string | null;
  arr: any;
  atmform!: FormGroup
  selectedfile: any;
  imageSrc!: string;
  imgres: any;
  catdata: any;
  editimg: any;
  
  constructor(private activate:ActivatedRoute,private toastr:ToastrService ,private formBuilder: FormBuilder,private router:Router,private api:ApiService) {

    this.atmform=this.formBuilder.group({
      // image: ['', Validators.required],
      category: ['', Validators.required],
     
    })
    
  }



  ngOnInit(): void {
    this.getcatdata()
  }
  get f(): { [key: string]: AbstractControl } {
    return this.atmform.controls;
  }
// get edit data
  getcatdata(){
    let id = localStorage.getItem('id');
    this.api.get(`category/${id}`).subscribe((res:any)=>{
      this.catdata=res;
      this.atmform.patchValue({  
        category:this.catdata.categoryname
    });
      console.log(this.catdata)
       })
  }


  
  //posting data
  onSubmit(): void {
    this.spanhide = false;
    this.spinner = true;

  const data={
    image:this.editimg,
    categoryname:(this.atmform.value).category
  }
  let id = localStorage.getItem('id');

    this.api.put(`category/${id}`,data).subscribe((res:any)=>{
      this.spanhide = true;
          this.spinner = false;
          this.router.navigate(['/categories'])  
      this.toastr.success("Category Updated Successfully");     
    },
    (error)=>{
      this.spanhide = true;
      this.spinner = false;
      this.toastr.error(error.error.error.message);
    })
}
}

