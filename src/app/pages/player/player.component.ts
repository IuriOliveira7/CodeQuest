import { Component, EventEmitter, Output } from '@angular/core';
import { PlayerService } from 'src/app/service/avatar/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  @Output() fecharModal = new EventEmitter<void>();
  
  fecharOpcoes() {
    this.fecharModal.emit();
  }

  constructor(private playerService: PlayerService) {}

  updatePlayerImage(imageUrl: string) {
    this.playerService.changePlayerImage(imageUrl);
    this.fecharOpcoes();
  }

}
