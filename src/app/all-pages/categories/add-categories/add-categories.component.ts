import { Component } from '@angular/core';
import {FormControl, AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.scss']
})
export class AddCategoriesComponent {

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
  
  constructor(private toastr:ToastrService ,private formBuilder: FormBuilder,private router:Router,private api:ApiService) {

    this.atmform=this.formBuilder.group({
      // image: ['', Validators.required],
      category: ['', Validators.required],
     
    })
    
  }



  ngOnInit(): void {
  }
// image file function
onFileChange(event: any) {
  const reader = new FileReader();
  if (event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    this.selectedfile = event.target.files[0];
    const imgData = new FormData();
imgData.append('image', this.selectedfile);
this.api.post('upload',imgData).subscribe((res:any)=>{  
this.imgres=res.output
},
(error)=>{
  this.spanhide = true;
  this.spinner = false;
  this.toastr.error(error.error.error.message);
  return
})
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSrc = reader.result as string;
    };
  }
}
  get f(): { [key: string]: AbstractControl } {
    return this.atmform.controls;
  }
  
  //posting data
  onSubmit(): void {
    this.spanhide = false;
    this.spinner = true;
    const data={
      // image:this.imgres,
      categoryname:(this.atmform.value).category
    }
    console.log(data)
      this.api.post('category',data).subscribe((res:any)=>{
        this.spanhide = true;
            this.spinner = false;
            this.router.navigate(['/categories'])  
        this.toastr.success("Category added Successfully");     
      },
      (error)=>{
        this.spanhide = true;
        this.spinner = false;
        this.toastr.error(error.error.error.message);
      })
}

}

