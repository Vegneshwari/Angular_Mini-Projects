import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {

  images = [

    {
      src: 'assets/AE-2017.jpg',
      caption: 'I was placed "second in Academic Excellence” in my third of college'
    },
    {
      src:'assets/AE-2018.jpg',
     caption: 'I was placed “first in Academic Excellence” in my final year of college'
    },
    {
      src:'assets/Seminar.jpg',
      caption: 'Actively participated in Seminars, Debates and other educational events, and placed first prise'
    },
    {
      src: 'assets/Sport-DiscusThrow.jpg',
      caption: 'Actively participated in Sports event and placed first prise'
    }
  
  ]

  currentSlideIndex = 0;
  direction='';

  prevSlide(): void{

    this.direction="right";
    this.currentSlideIndex= (this.currentSlideIndex-1+this.images.length)%this.images.length 

  }

  nextSlide():void{

    this.direction="left";
    this.currentSlideIndex = (this.currentSlideIndex+1+this.images.length)%this.images.length

  }

  setDirection(){
    this.direction='';
  }

  // goToSlide(i:number){
  //   this.currentSlideIndex = i;
  // }
}
