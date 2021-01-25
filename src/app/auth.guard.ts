import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private SignData: UsersService, private router: Router) { }
    canActivate(): boolean {
        if (this.SignData.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/sign'])

            return false;

        }
    }
}