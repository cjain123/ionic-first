import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  alert: boolean = false;
  ExistingUser;
  email: string;
  password: string;
  data: string;
  isloggedin: boolean;
  constructor(private users: UsersService, private Router: Router) { }

  ngOnInit() {
    this.data = localStorage.getItem('token');
  }
  UserLog() {
    if (this.email == 'admin@gmail.com' && this.password == 'admin123') {
      this.Router.navigate([`/dashboard`]);
      this.isloggedin = true;
      this.users.storeToken();
    } else {
      alert('enter valid detail');
      this.isloggedin = false;
    }
    this.data = 'QpwL5tke4Pnpja7X4';
    localStorage.setItem('token', this.data);
    console.log(this.ExistingUser);
    this.users
      .existingUser(this.ExistingUser)
      .subscribe((result) => console.log());
  }
}
