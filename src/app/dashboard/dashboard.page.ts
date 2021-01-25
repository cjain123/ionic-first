import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../users.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  data;
  Total: number;
  constructor(private userservice: UsersService, private Router: Router) { }

  ngOnInit() {
    this.data = localStorage.getItem('token');
    this.LoggedUser();
  }
  Logout() {
    localStorage.removeItem('token');
    this.Router.navigate(['/login']);
  }
  LoggedUser(): any {
    this.userservice.loggedUser().subscribe((result: any) => {
      this.Total = result.length;
    });
  }
}


