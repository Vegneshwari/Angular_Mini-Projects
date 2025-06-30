import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit{


  ngOnInit(): void {
    alert("Offer is waiting for you!")
  }
  
}
