import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infos-jogador',
  templateUrl: './infos-jogador.component.html',
  styleUrls: ['./infos-jogador.component.scss']
})
export class InfosJogadorComponent {

  constructor(private router: Router) {}

  redirecionar(pagina: string) {
    this.router.navigate([pagina]);
  }

  sair() {
    this.redirecionar('');
  }
  
}
