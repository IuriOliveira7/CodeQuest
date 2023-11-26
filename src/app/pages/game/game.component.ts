import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from 'src/app/service/audio/audio.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  playpause: boolean = false;

  constructor(public audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.play(2);
    this.audioService.pause(1);
  }

}
