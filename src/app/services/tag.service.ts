import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../config/http';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor(private http: HttpClient) {}

  index() {
    return this.http.get(`${API}/tags`);
  }

  show(tagId: number) {
    return this.http.get(`${API}/tags/${tagId}`);
  }

  store(tag: Tag) {
    return this.http.post(`${API}/tags`, tag);
  }

  update(tagId: number, tag: Tag) {
    return this.http.patch(`${API}/tags/${tagId}`, tag);
  }

  delete(tagId: number) {
    return this.http.delete(`${API}/tags/${tagId}`);
  }
}
