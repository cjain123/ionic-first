import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {
  Users;
  searchValue: string;
  data;
  id;
  Total: number;
  name: string;
  order: any;

  constructor(private UsersService: UsersService, private Router: Router) { }

  ngOnInit() {
    this.getUserList();
    this.data = localStorage.getItem('token');
  }
  getUserList(): any {
    this.UsersService.getUserList().subscribe((result: any) => {
      this.Users = result;
    });
  }
  deleteUserData(UserData) {
    this.Users.splice(UserData.id, 1);
    this.UsersService.deleteUserData(UserData).subscribe((user) => {
      user;
    });
  }
  Logout() {
    localStorage.removeItem('token');
    this.Router.navigate(['/login']);
  }
  sortData() {
    if (this.order) {
      let newarr = this.Users.sort((a, b) => a.id - b.id);
      this.data = newarr
    }
    else {
      let newarr = this.Users.sort((a, b) => b.id - a.id);
      this.data = newarr
    }
    this.order = !this.order;
  }
  search() {
    if (this.name == '') {
      this.Users;
    } else {
      this.Users = this.Users.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }
}
