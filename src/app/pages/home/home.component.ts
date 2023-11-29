import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from 'src/app/service/audio/audio.service';
import { PlayerService } from 'src/app/service/avatar/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  playpause: boolean = false;
  buttonClass: string = 'button-som';
  isModalAberto: boolean = false;
  isModalAvatarAberto: boolean = false;
  currentPlayerImage: string | undefined;

  constructor(private router: Router, public audioService: AudioService, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.audioService.play(1);
    this.audioService.pause(2);

    this.playerService.currentPlayerImage.subscribe(imageUrl => {
      this.currentPlayerImage = imageUrl;
    });
  }

  redirecionar(pagina: string) {
    this.router.navigate([pagina]);
  }

  jogar() {
    this.redirecionar('game');
  }

  creditos() {
    this.redirecionar('creditos');
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

  AbrirModal() {
    this.isModalAberto = !this.isModalAberto;
  }

  AbrirModalAvatar() {
    this.isModalAvatarAberto = !this.isModalAvatarAberto;
  }

  fecharModal() {
    this.isModalAberto = false;
  }

  fecharModalAvatar() {
    this.isModalAvatarAberto = false;
  }

  sair(){
    this.redirecionar('');
  }
  
}
