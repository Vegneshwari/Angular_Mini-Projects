import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxParticlesModule } from '@tsparticles/angular';
import { loadFull } from 'tsparticles';
import { Engine } from '@tsparticles/engine';
// import { Engine } from 'tsparticles-engine' --doubt;




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NgxParticlesModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  particlesOptions = {
    background: {
      color: { value: '#1f1f1f' }
    },
    particles: {
      number: { value: 50 },
      color: { value: '#ffffff' },
      links: {
        enable: true, //draw lines between nearby particles
        color: '#ffffff',
        distance: 150
      },
      move: {
        enable: true,
        speed: 2
      },
      size: { value: 3 },
      opacity: { value: 0.5 }
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    }
  };


  async particlesInit(engine: Engine): Promise<void>
    {
      await loadFull(engine)
    }

  particlesLoaded(container: any): void
  {
    console.log('Particles loaded:', container);
    

  }

}
