import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PerguntasService {
  constructor() {}

  getPerguntas() {
    let perguntas = [
      {
        nivel: 1,
        categoria: 'Programação WEB',
        pergunta:
          'Qual linguagem de marcação é usada para estruturar o conteúdo de uma página web?',
        alternativas: { a: 'JavaScript', b: 'CSS', c: 'HTML', d: 'PHP' },
        alternativaCorreta: 'c',
      },

      {
        nivel: 2,
        categoria: 'Programação WEB',
        pergunta: 'O que significa CSS em termos de desenvolvimento web?',
        alternativas: {
          a: 'Computer Style Sheets',
          b: 'Creative Style Sheets',
          c: 'Colorful Style Sheets',
          d: 'Cascading Style Sheets',
        },
        alternativaCorreta: 'd',
      },

      {
        nivel: 3,
        categoria: 'Programação WEB',
        pergunta:
          'Qual dos seguintes é um framework JavaScript amplamente utilizado?',
        alternativas: { a: 'Java', b: 'jQuery', c: 'JSON', d: 'Jekyll' },
        alternativaCorreta: 'b',
      },

      {
        nivel: 4,
        categoria: 'Programação WEB',
        pergunta: 'O que é AJAX no contexto da programação web?',
        alternativas: {
          a: 'Uma linguagem de programação',
          b: 'Uma técnica para carregamento assíncrono de dados',
          c: 'Um formato de arquivo de imagem',
          d: 'Uma biblioteca CSS',
        },
        alternativaCorreta: 'b',
      },

      {
        nivel: 5,
        categoria: 'Programação WEB',
        pergunta:
          'Qual é a função principal do comando SQL "SELECT" em bancos de dados web?',
        alternativas: {
          a: 'Inserir dados',
          b: 'Atualizar dados',
          c: 'Selecionar dados',
          d: 'Excluir dados',
        },
        alternativaCorreta: 'c',
      },

      {
        nivel: 6,
        categoria: 'Programação WEB',
        pergunta: 'O que significa a sigla URL em termos de web?',
        alternativas: {
          a: 'Universal Resource Locator',
          b: 'Uniform Retrieval Locator',
          c: 'Unified Resource Link',
          d: 'Universal Retrieval Link',
        },
        alternativaCorreta: 'a',
      },

      {
        nivel: 7,
        categoria: 'Programação WEB',
        pergunta: 'Em termos de desenvolvimento web, o que é o padrão MVC?',
        alternativas: {
          a: 'Most Valuable Code',
          b: 'Model View Controller',
          c: 'Multiple View Configuration',
          d: 'Main Variable Configuration',
        },
        alternativaCorreta: 'b',
      },

      {
        nivel: 8,
        categoria: 'Programação WEB',
        pergunta:
          'Qual é a diferença entre "GET" e "POST" em solicitações HTTP?',
        alternativas: {
          a: 'GET é utilizado para enviar dados, enquanto POST é usado para receber dados.',
          b: 'GET é mais seguro do que POST.',
          c: 'POST é utilizado para solicitações assíncronas.',
          d: 'GET anexa dados à URL, enquanto POST os envia no corpo da solicitação.',
        },
        alternativaCorreta: 'd',
      },

      {
        nivel: 9,
        categoria: 'Programação WEB',
        pergunta: 'O que é um cookie no contexto da web?',
        alternativas: {
          a: 'Um pequeno script JavaScript',
          b: 'Um arquivo de estilo CSS',
          c: 'Um pequeno arquivo de texto armazenado no navegador do usuário',
          d: 'Uma linguagem de marcação XML',
        },
        alternativaCorreta: 'c',
      },

      {
        nivel: 10,
        categoria: 'Programação WEB',
        pergunta: 'Qual é o propósito do arquivo "robots.txt" em um site?',
        alternativas: {
          a: 'Para exibir mensagens de erro personalizadas',
          b: 'Para instruir os motores de busca sobre quais partes do site podem ser rastreadas',
          c: 'Para armazenar configurações de banco de dados',
          d: 'Para definir estilos específicos para dispositivos móveis.',
        },
        alternativaCorreta: 'b',
      },
    ];

    return perguntas;
  }
}
