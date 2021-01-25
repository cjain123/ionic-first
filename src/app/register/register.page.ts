import { UsersService } from './../users.service';
import { RouterModule, Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  alert: boolean = false;
  Register: any = ({
    name: '',
    email: '',
    password: ''
  });
  constructor(private users: UsersService, private Router: Router) { }

  ngOnInit() {
  }
  newUser() {
    if (this.Register) {
      this.Router.navigate([`/login`]);
    } else {
      alert('enter valid detail');
    }
    console.log(this.Register.value);
    this.users
      .createUser(this.Register.value)
      .subscribe((Data) => console.log());
  }
}
