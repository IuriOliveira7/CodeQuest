import { Component } from '@angular/core';

@Component({
  selector: 'app-iceberg',
  templateUrl: './iceberg.component.html',
  styleUrls: ['./iceberg.component.scss']
})
export class IcebergComponent {
  
  // 0 = NADA
  // 1 = BLOQUEADO
  // 2 = ATIVO

  quartaLinhaEhEstouAqui: boolean = false;
  quintaLinhaEhEstouAqui: boolean = false;
  setimaLinhaEhEstouAqui: boolean = false;
  oitavaLinhaEhEstouAqui: boolean = false;

  // Verifica se a quinta linha atende à condição
  ngOnInit() {
    this.quartaLinhaEhEstouAqui = this.isFifthColumn(this.dadosLinhas[3]);
    this.quintaLinhaEhEstouAqui = this.isFifthColumn(this.dadosLinhas[4]);
    this.setimaLinhaEhEstouAqui = this.isFifthColumn(this.dadosLinhas[6]);
    this.oitavaLinhaEhEstouAqui = this.isFifthColumn(this.dadosLinhas[8]);
  }

  dadosLinhas = [
    { largura: 130, colunas: [1, 1] },
    { largura: 250, colunas: [1, 1, 1, 1] },
    { largura: 320, colunas: [1, 1, 1, 1] },
    { largura: 380, colunas: [1, 1, 1, 1, 1, 1] },
    { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
    { largura: 350, colunas: [0, 1, 1, 1, 1, 1, 1, 1] },
    { largura: 330, colunas: [0, 1, 1, 1, 1, 1, 1, 1] },
    { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
    { largura: 200, colunas: [0, 1, 1, 1, 1, 0] },
    { largura: 180, colunas: [0, 1, 0] },
  ];
  

  getStatusClass(status: number): string {
    switch (status) {
      case 0:
        return 'deixeEmBranco';
      case 1:
        return 'estouBloqueado';
      case 2:
        return 'estouAqui';
      default:
        return '';
    }
  }

  // Lógica para verificar se todos os valores são 2
  isFifthColumn(dadosLinha: { largura: number; colunas: number[] }): boolean {
    const colunasSemZero = dadosLinha.colunas.filter(valor => valor !== 0);
    
    // Verifica se todos os valores (exceto 0) são 2
    return colunasSemZero.every(valor => valor === 2);
  }


}