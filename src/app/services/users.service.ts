import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../classes/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URI = 'http://localhost:3000/users'
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(this.URI);
  }

  newUser(user: Users) {
    return this.http.post(`${this.URI}/`, user);
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.URI}/delete/${id}`);
  }
  allUsers() {
    return this.http.get(`${this.URI}/all-users`)
  }
  ableUser(id) {
    return this.http.get(`${this.URI}/able/${id}`);
  }
  disableUser(id) {
    return this.http.get(`${this.URI}/disable/${id}`);
  }
}
