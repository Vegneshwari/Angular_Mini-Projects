import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-shopnow',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './shopnow.component.html',
  styleUrl: './shopnow.component.css'
})
export class ShopnowComponent {

  today: Date = new Date();

}
