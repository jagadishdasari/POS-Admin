import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  spinner: boolean = false;
  spanhide: boolean = true;
  catform!: FormGroup;
  selectedfile: any;
  imageSrc: string | ArrayBuffer | null = null;
  imgres: any;

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.catform = this.formBuilder.group({
      // image: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  // image file function
  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.selectedfile = event.target.files[0];
      const imgData = new FormData();
      imgData.append('image', this.selectedfile);
      this.api.post('upload', imgData).subscribe(
        (res: any) => {
          this.imgres = res.output;
        },
        (error) => {
          this.spanhide = true;
          this.spinner = false;
          this.toastr.error(error.error.error.message);
          return;
        }
      );
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result;
      };
    }
  }

  // Posting data
  onSubmit(): void {
    this.spanhide = false;
    this.spinner = true;
    const data = {
      // image: this.imgres,
      categoryname: this.catform.value.category
    };
    console.log(data);
    this.api.post('category', data).subscribe(
      (res: any) => {
        this.spanhide = true;
        this.spinner = false;
        this.router.navigate(['/category']);
        this.toastr.success('Category added Successfully');
      },
      (error) => {
        this.spanhide = true;
        this.spinner = false;
        this.toastr.error(error.error.error.message);
      }
    );
  }
}
