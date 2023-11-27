import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infos-jogador',
  templateUrl: './infos-jogador.component.html',
  styleUrls: ['./infos-jogador.component.scss'],
})
export class InfosJogadorComponent {
  constructor(private router: Router) {}

  @Input() vidas: number = 5;

  redirecionar(pagina: string) {
    this.router.navigate([pagina]);
  }

  sair() {
    this.redirecionar('');
  }
}
