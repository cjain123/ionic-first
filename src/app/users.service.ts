import { Injectable } from '@angular/core';
import{ HttpClientModule , HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HTTP) { }
  URL = 'http://localhost:3000/users';

}
