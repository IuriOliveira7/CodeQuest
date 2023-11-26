import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from 'src/app/service/audio/audio.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('modalState', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(-100%)'
      })),
      transition('void => hide', [style({ opacity: 0, transform: 'translateY(-100%)' }), animate('300ms ease-out')]),
      transition('hide => show', animate('300ms ease-in')),
    ])
  ]
})
export class HomeComponent {
  playpause: boolean = false;
  buttonClass: string = 'button-som';

  constructor(private router: Router, public audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.play(1);
    this.audioService.pause(2);
  }

  redirecionar(pagina: string) {
    this.router.navigate([pagina]);
  }

  jogar() {
    this.redirecionar('game');
  }

  alternarAudio() {
    if (this.playpause) {
      this.audioService.pause();
    } else {
      this.audioService.play();
    }
    this.playpause = this.audioService.playpause();
    this.buttonClass = this.playpause ? 'button-som' : 'muted';
  }

  isModalAberto: boolean = false;

  AbrirModal() {
    this.isModalAberto = !this.isModalAberto;
  }

  fecharModal() {
    this.isModalAberto = false;
  }
  
}
