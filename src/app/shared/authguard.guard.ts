import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../authServices/authservice.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private auth:AuthserviceService,private route:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const checking = this.auth.IsloggedIn()
   
    if (checking == true) {
      return true
    }
    else if(checking == false){
   this.route.navigate(['/login']);
    return false;
    }
    return false;
    
  }
  
}
