import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AllCollectionsService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  getAllCollections(page: number, limit: number) {
    return this.http.get(`${this.API_URL}collections/list?page=${page}&limit=${limit}`);
  }

  getRecentCollections() {
    return this.http.get(`${this.API_URL}recent-collections/list`);
  }

  getTopCollections() {
    return this.http.get(`${this.API_URL}top-collections/list`);
  }

}
