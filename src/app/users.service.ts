import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  URL = 'http://localhost:3000/users';


  existingUser(UserLog) {
    return this.http.get(this.URL, UserLog);
  }
  createUser(Data) {
    return this.http.post(this.URL, Data);
  }
  storeToken() {
    return localStorage.setItem;
  }
  getUserList() {
    return this.http.get(this.URL);
  }
  deleteUserData(id) {
    return this.http.delete(`${this.URL}/${id}`);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  Logout(): any {
    return localStorage.removeItem('token');
  }
  loggedUser() {
    return this.http.get(this.URL);
  }
}
