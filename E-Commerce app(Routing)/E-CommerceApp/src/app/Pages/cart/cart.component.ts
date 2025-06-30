import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {

    // const id = this.route.snapshot.paramMap.get('id');

    const id = this.route.paramMap.subscribe(params=>{
      params.get('id')
    })
    
  }
}


//snapshot - one-time read, for static params
//paramMap.subscribe() - listen to changes or dynamic routing