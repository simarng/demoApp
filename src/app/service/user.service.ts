import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(environment.apiUrl + "users");
  }

  getUserById(id) {
    return this.http.get(environment.apiUrl + "users", { params: { id: id } });
  }

}
