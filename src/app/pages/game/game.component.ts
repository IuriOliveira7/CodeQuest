import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from 'src/app/service/audio/audio.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  playpause: boolean = false;
  nivel: number = 1;
  loading = true;
  emTransicao = false;

  constructor(public audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.play(2);
    this.audioService.pause(1);

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  alteraNivel(nivel: any) {
    this.nivel = nivel;
    this.emTransicao = true;

    setTimeout(() => {
      this.emTransicao = false;
    }, 3000);
  }
}
