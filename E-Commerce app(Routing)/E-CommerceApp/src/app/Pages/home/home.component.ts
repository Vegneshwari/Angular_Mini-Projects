import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Service/products.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


  productList: any[]=[];

  cartObj: any = {

              "id": 0,
              "title": "string",
              "price": 0.1,
              "description": "string",
              "category": "string",
              "image": "http://example.com"
        }
  


  //product service - DI
  constructor(private productService: ProductsService){}

  loadAllProducts(){
    this.productService.getAllProducts().subscribe( (val)=>{
      this.productList = val.slice(0,4);
    } )
  }

  addedToCart(id: number){

    const selectedProduct = this.productList.find(val=>val.id === id)

    if(selectedProduct){

      this.productService.addToCart(selectedProduct).subscribe(val=>{
        console.log("Added to cart", val);
        
      })

    }
    else{
      console.log("Product not found with id:", id);
      
    }
  }



  ngOnInit(): void {
    this.loadAllProducts();
  }

}
