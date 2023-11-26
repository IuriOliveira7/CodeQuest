import { Component, EventEmitter, Output } from '@angular/core';
import { AudioService } from 'src/app/service/audio/audio.service';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.scss']
})
export class OpcoesComponent {
  constructor(public audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.play(1);

    this.audioService.volumeHomeChanged.subscribe((volume) => {
      console.log('Volume Home received:', volume);
    });

    this.audioService.volumeJogoChanged.subscribe((volume) => {
      console.log('Volume Jogo received:', volume);
      // Não é necessário atribuir o volume aqui, pois já está sendo feito no serviço
    });
  }

  onVolumeChange(audioNumber: number, { target }: Event) {
    const inputElement = target as HTMLInputElement;
    if (inputElement) {
      const newVolume = inputElement.value;
      if (newVolume !== undefined && newVolume !== null) {
        this.audioService.setVolume(audioNumber, +newVolume);
      }
    }
  }

  @Output() fecharModal = new EventEmitter<void>();

  onSairClick() {
    this.fecharModal.emit();
  }
}
