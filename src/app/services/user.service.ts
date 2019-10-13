import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../config/http';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signUp(user: User) {
    return this.http.post(`${API}/users`, user);
  }

  signIn(user: User) {
    return this.http.post(`${API}/session`, user);
  }
}
