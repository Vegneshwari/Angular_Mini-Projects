import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit{

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]>{
    
        // debugger;
         return this.http.get<any[]>(`https://fakestoreapi.com/products`)
  
      }

      addToCart(data: any): Observable<any>{
        
        // debugger;
        return this.http.post<any>('https://fakestoreapi.com/carts', data)

      }

  ngOnInit(): void {


    
  }


}
