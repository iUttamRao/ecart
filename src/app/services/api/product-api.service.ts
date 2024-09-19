import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private apiUrl = "https://api.escuelajs.co/api/v1/products"

  constructor(private http : HttpClient) { }
  
  getProduct() : Observable<any> {
    return this.http.get(this.apiUrl)
  }
}
