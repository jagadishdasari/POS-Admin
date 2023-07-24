import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private api:ApiService,private toaster:ToastrService,private route:Router) { }
login(phone:any,password:any) {
        return this.api.post('auth/login', {          
          phone:phone,
          password: password,
        }).pipe(map((user: any) => {
                if (user && user.accessToken) {
                  console.log(user.accessToken)
                 
                }
                return user;
            }));
    }
    
 getUser() {
        return localStorage.getItem('token-atm');
    }
  IsloggedIn(){
   if(localStorage.getItem('token-atm') == null){
      return false
    }else{
      return true
    }
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('rolePermission');
    localStorage.clear();
   this.toaster.success('Logout Successfully');
if(localStorage.getItem('token')==null){
  this.route.navigate(['/login'])
}
    // window.location.reload()

   
  }
}
