import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.audio.src = '../../assets/som/Paul_Werner_-_Pixel_Hunt.mp3'; // Substitua com o caminho real do seu arquivo de áudio
    this.audio.loop = true;
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  playpause(): boolean {
    return !this.audio.paused;
  }
}