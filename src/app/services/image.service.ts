import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Item} from '../models/item';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  getImages(page): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}?_page=${page}`);
  }

}
