import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from 'src/app/service/audio/audio.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  constructor(public audioService: AudioService) {}

  ngOnInit() {
    this.audioService.pause();
  }

}
