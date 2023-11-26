import { Component } from '@angular/core';
import { PerguntasService } from 'src/app/service/perguntas.service';

@Component({
  selector: 'app-modal-perguntas',
  templateUrl: './modal-perguntas.component.html',
  styleUrls: ['./modal-perguntas.component.scss'],
})
export class ModalPerguntasComponent {
  constructor(private servicePerguntas: PerguntasService) {}

  nivel = 1;
  perguntas = this.servicePerguntas.getPerguntas();
  alternativaSelecionada = '';

  verificarResposta(pergunta: any) {
    if (this.alternativaSelecionada == pergunta.alternativaCorreta) {
      alert('acerto miseravi');
      this.alternativaSelecionada = '';
      this.nivel++;
    } else {
      alert('errrouuuuu');
    }
  }
}
