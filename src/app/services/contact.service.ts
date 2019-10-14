import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../config/http';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  index() {
    return this.http.get(`${API}/contacts`);
  }

  store(contact: Contact) {
    return this.http.post(`${API}/contacts`, contact);
  }
}
