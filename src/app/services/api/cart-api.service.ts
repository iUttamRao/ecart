import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor(private http: HttpClient) { }
  postCart() {
    return this.http.get("http://localhost:5000/carts")
  }
}
