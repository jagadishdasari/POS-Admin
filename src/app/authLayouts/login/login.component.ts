import { Component } from '@angular/core';
import {FormControl, AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  otplayout: boolean = false;
  hidehide:boolean=true;
  spinner:boolean=false;
loginlayout:boolean=true;
  form: FormGroup = new FormGroup({
   
    email: new FormControl(''),
    password: new FormControl(''),
   
  });
  submitted = false;
  response: any;
 
  constructor(private toas:ToastrService ,private formBuilder: FormBuilder,private router:Router,private api:ApiService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        
        email: ['', [Validators.required,
            Validators.minLength(10),
        ]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        
      },
    
    );
  }
get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.hidehide=false;
    this.spinner = true;
    this.api.post('login',this.form.value).subscribe((res:any)=>{
      console.log(res)
  this.router.navigate(['/'])
 localStorage.setItem('token-atm', res.output.token);
 localStorage.setItem('admintype', res.output.authType);
 localStorage.setItem('email', res.output.email);                         
 this.toas.success('Wellcome to Dashboard');

      
    } ,(error)=> {
      this.spinner = false;
      this.hidehide=true;
      this.toas.error(error.error.error.message);
    });

  }
  
  onOtpChange(code:any){
if (code.length === 6) {
  this.router.navigate(['/'])
    localStorage.setItem('otp',JSON.stringify(code));
  
}
  }
}
