import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = "https://api.punkapi.com/v2"

@Injectable({
  providedIn: 'root'
})
export class ProdcutsService {
  
  constructor(private http:HttpClient) { }
  
  getAllProduct(){
    return this.http.get(`${baseURL}/beers`)
  }
}
