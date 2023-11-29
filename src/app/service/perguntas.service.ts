import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PerguntasService {
  constructor() { }

  getPerguntas() {
    let perguntas = [

      // FACIL
      {
        nivel: 1,
        categoria: 'Introdução à Programação',
        pergunta: 'O que é programação de computadores?',
        alternativas: {
          a: 'Um método de comunicação entre humanos e máquinas.',
          b: 'Uma linguagem utilizada apenas por engenheiros de software.',
          c: 'Um conjunto de instruções para um computador executar tarefas específicas.',
          d: 'Uma forma de entretenimento digital.',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 2,
        categoria: 'Variáveis e Tipos de Dados',
        pergunta: 'O que são variáveis em programação?',
        alternativas: {
          a: 'Valores fixos que não podem ser alterados durante a execução do programa.',
          b: 'Espaços de memória usados para armazenar informações modificáveis durante a execução do programa.',
          c: 'Instruções que controlam o fluxo de um programa.',
          d: 'Elementos visuais em interfaces gráficas.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 3,
        categoria: 'Estruturas de Controle',
        pergunta: 'O que faz um comando "if" em programação?',
        alternativas: {
          a: 'Repete uma ação várias vezes.',
          b: 'Executa uma ação apenas se uma condição especificada for verdadeira.',
          c: 'Armazena dados em um local específico.',
          d: 'Encerra a execução do programa.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 4,
        categoria: 'Estruturas de Repetição',
        pergunta: 'Qual é o propósito do loop "for"?',
        alternativas: {
          a: 'Executar uma ação enquanto uma condição for verdadeira.',
          b: 'Executar uma ação uma única vez.',
          c: 'Executar uma ação um número específico de vezes.',
          d: 'Encerrar a execução do programa.',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 5,
        categoria: 'Funções',
        pergunta: 'O que são funções em programação?',
        alternativas: {
          a: 'Comentários explicativos no código.',
          b: 'Blocos de código que podem ser reutilizados para realizar uma tarefa específica.',
          c: 'Declarações que importam bibliotecas externas.',
          d: 'Condições que controlam o fluxo do programa.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 6,
        categoria: 'Arrays e Listas',
        pergunta: 'Como os elementos são acessados em um array?',
        alternativas: {
          a: 'Através de um índice numérico que representa a posição do elemento no array.',
          b: 'Apenas por meio de uma chave específica.',
          c: 'Os elementos não podem ser acessados em um array.',
          d: 'Através de uma instrução "access" específica.',
        },
        alternativaCorreta: 'a',
      },
      {
        nivel: 7,
        categoria: 'Orientação a Objetos',
        pergunta: 'O que é encapsulamento em programação orientada a objetos?',
        alternativas: {
          a: 'Um método de proteção contra vírus.',
          b: 'Ocultar os detalhes internos de implementação de um objeto e expor apenas o necessário.',
          c: 'Agrupar vários objetos em uma única entidade.',
          d: 'Converter um objeto em uma string.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 8,
        categoria: 'Manipulação de Strings',
        pergunta: 'Como concatenar duas strings em muitas linguagens de programação?',
        alternativas: {
          a: 'Usando o operador "+"',
          b: 'Usando o operador "-"',
          c: 'Apenas com uma função específica chamada "concat"',
          d: 'Não é possível concatenar strings.',
        },
        alternativaCorreta: 'a',
      },
      {
        nivel: 9,
        categoria: 'Tratamento de Exceções',
        pergunta: 'O que é um bloco "try-catch" utilizado para?',
        alternativas: {
          a: 'Definir uma função.',
          b: 'Manipular exceções e erros durante a execução do programa.',
          c: 'Declarar uma variável global.',
          d: 'Criar um loop de repetição.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 10,
        categoria: 'Manipulação de Arquivos',
        pergunta: 'Como abrir um arquivo em modo de leitura em muitas linguagens de programação?',
        alternativas: {
          a: 'open("arquivo.txt", "w")',
          b: 'open("arquivo.txt", "r")',
          c: 'open("arquivo.txt", "a")',
          d: 'open("arquivo.txt", "x")',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 11,
        categoria: 'Desenvolvimento Web',
        pergunta: 'O que significa HTML?',
        alternativas: {
          a: 'HyperText Markup Language',
          b: 'High-level Text Machine Language',
          c: 'HyperTransfer Text Language',
          d: 'High-level Transfer Machine Language',
        },
        alternativaCorreta: 'a',
      },
      {
        nivel: 12,
        categoria: 'Banco de Dados',
        pergunta: 'Qual é a função do comando SQL "SELECT"?',
        alternativas: {
          a: 'Inserir dados em um banco de dados.',
          b: 'Atualizar dados em um banco de dados.',
          c: 'Recuperar dados de um banco de dados.',
          d: 'Excluir dados de um banco de dados.',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 13,
        categoria: 'Frameworks',
        pergunta: 'Qual é um exemplo de framework JavaScript?',
        alternativas: {
          a: 'JavaFX',
          b: 'Django',
          c: 'React',
          d: 'Flask',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 14,
        categoria: 'Segurança da Informação',
        pergunta: 'O que é um ataque de força bruta?',
        alternativas: {
          a: 'Um ataque que explora falhas de segurança em um software.',
          b: 'Um ataque que utiliza a força física para invadir sistemas.',
          c: 'Um ataque que tenta quebrar uma senha através da tentativa de várias combinações.',
          d: 'Um ataque que se disfarça de uma entidade confiável para enganar os usuários.',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 15,
        categoria: 'Inteligência Artificial',
        pergunta: 'O que é aprendizado de máquina?',
        alternativas: {
          a: 'Um tipo de programação que simula o pensamento humano.',
          b: 'Um campo de estudo que envolve ensinar aos computadores a capacidade de aprender.',
          c: 'Um método de compressão de dados.',
          d: 'Uma técnica para criar interfaces de usuário intuitivas.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 16,
        categoria: 'DevOps',
        pergunta: 'O que é DevOps?',
        alternativas: {
          a: 'Uma linguagem de programação.',
          b: 'Um método de desenvolvimento de software que enfatiza a colaboração entre desenvolvimento e operações.',
          c: 'Um sistema operacional.',
          d: 'Uma ferramenta de controle de versão.',
        },
        alternativaCorreta: 'b',
      },















      // MODERADO
      {
        nivel: 17,
        categoria: 'Algoritmos',
        pergunta: 'O que é um algoritmo?',
        alternativas: {
          a: 'Um tipo de linguagem de programação.',
          b: 'Um conjunto de instruções passo a passo para realizar uma tarefa.',
          c: 'Uma função matemática complexa.',
          d: 'Um tipo de variável.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 18,
        categoria: 'Estruturas de Dados',
        pergunta: 'O que é uma pilha (stack) em programação?',
        alternativas: {
          a: 'Uma estrutura de dados que segue o princípio LIFO (Last In, First Out).',
          b: 'Um método de ordenação de dados.',
          c: 'Uma forma de armazenar dados em ordem aleatória.',
          d: 'Um tipo de loop.',
        },
        alternativaCorreta: 'a',
      },
      {
        nivel: 19,
        categoria: 'Recursividade',
        pergunta: 'O que é uma função recursiva?',
        alternativas: {
          a: 'Uma função que opera apenas com números inteiros.',
          b: 'Uma função que chama a si mesma.',
          c: 'Uma função que utiliza uma estrutura de repetição.',
          d: 'Uma função que retorna múltiplos valores.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 20,
        categoria: 'Programação Orientada a Objetos',
        pergunta: 'O que é herança em programação orientada a objetos?',
        alternativas: {
          a: 'Uma forma de criar objetos a partir de uma classe.',
          b: 'A capacidade de uma classe herdar propriedades e métodos de outra classe.',
          c: 'Um método para ocultar dados em um objeto.',
          d: 'A criação de objetos sem a necessidade de classes.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 21,
        categoria: 'Manipulação de Arquivos',
        pergunta: 'O que é um arquivo CSV?',
        alternativas: {
          a: 'Um tipo de compressão de arquivo.',
          b: 'Um formato de arquivo para armazenar dados tabulares.',
          c: 'Um arquivo de imagem.',
          d: 'Um arquivo de áudio.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 22,
        categoria: 'Desenvolvimento Web',
        pergunta: 'O que é AJAX?',
        alternativas: {
          a: 'Uma linguagem de programação para desenvolvimento web.',
          b: 'Um tipo de banco de dados.',
          c: 'Uma técnica que permite atualizações de página sem recarregar a página inteira.',
          d: 'Uma biblioteca de design para interfaces gráficas.',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 23,
        categoria: 'Testes de Software',
        pergunta: 'O que é teste unitário?',
        alternativas: {
          a: 'Um teste que verifica a integridade de todo o sistema.',
          b: 'Um teste que verifica uma unidade isolada de código.',
          c: 'Um teste que verifica a usabilidade de um software.',
          d: 'Um teste que verifica a velocidade de execução de um programa.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 24,
        categoria: 'Segurança da Informação',
        pergunta: 'O que é SSL?',
        alternativas: {
          a: 'Uma linguagem de programação para scripts do lado do cliente.',
          b: 'Um protocolo de segurança que garante a comunicação segura pela internet.',
          c: 'Um tipo de ataque cibernético.',
          d: 'Um sistema de login seguro.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 25,
        categoria: 'Banco de Dados',
        pergunta: 'O que é normalização de banco de dados?',
        alternativas: {
          a: 'Uma técnica para otimizar a velocidade de consultas em um banco de dados.',
          b: 'Um método para organizar dados em uma tabela de banco de dados.',
          c: 'Um tipo de backup de banco de dados.',
          d: 'Um processo para criptografar dados em um banco de dados.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 26,
        categoria: 'Frameworks',
        pergunta: 'Qual é a principal característica do framework Django?',
        alternativas: {
          a: 'Desenvolvimento de jogos.',
          b: 'Desenvolvimento web utilizando Python.',
          c: 'Inteligência Artificial.',
          d: 'Desenvolvimento de aplicativos móveis.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 27,
        categoria: 'Inteligência Artificial',
        pergunta: 'O que é aprendizado supervisionado?',
        alternativas: {
          a: 'Um método de treinamento de algoritmos sem dados de entrada.',
          b: 'Um método de treinamento em que o modelo é alimentado com dados rotulados.',
          c: 'Um método de treinamento exclusivo para redes neurais.',
          d: 'Um método que não envolve treinamento de modelo.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 28,
        categoria: 'Desenvolvimento Ágil',
        pergunta: 'O que é Scrum?',
        alternativas: {
          a: 'Uma linguagem de programação.',
          b: 'Um método de desenvolvimento de software baseado em iterações.',
          c: 'Um sistema operacional.',
          d: 'Uma ferramenta de controle de versão.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 29,
        categoria: 'Computação em Nuvem',
        pergunta: 'O que é um serviço de infraestrutura como serviço (IaaS)?',
        alternativas: {
          a: 'Um serviço que fornece recursos de hardware virtualizados pela internet.',
          b: 'Um serviço que fornece apenas software como serviço.',
          c: 'Um serviço que fornece apenas dados como serviço.',
          d: 'Um serviço de segurança para proteger dados em nuvem.',
        },
        alternativaCorreta: 'a',
      },
      {
        nivel: 30,
        categoria: 'Programação Funcional',
        pergunta: 'O que é uma função de alta ordem?',
        alternativas: {
          a: 'Uma função que opera apenas com números inteiros.',
          b: 'Uma função que chama a si mesma.',
          c: 'Uma função que recebe outra função como argumento ou retorna uma função.',
          d: 'Uma função que não retorna valor algum.',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 31,
        categoria: 'Redes de Computadores',
        pergunta: 'O que é um endereço IP?',
        alternativas: {
          a: 'Um identificador único para um dispositivo em uma rede.',
          b: 'Um tipo de linguagem de programação.',
          c: 'Um tipo de protocolo de segurança.',
          d: 'Uma forma de compressão de dados.',
        },
        alternativaCorreta: 'a',
      },
      {
        nivel: 32,
        categoria: 'Machine Learning',
        pergunta: 'O que é overfitting em machine learning?',
        alternativas: {
          a: 'Um modelo que se ajusta muito bem aos dados de treinamento, mas não generaliza bem para novos dados.',
          b: 'Um modelo que não se ajusta bem aos dados de treinamento.',
          c: 'Um método de treinamento de modelo sem dados de validação.',
          d: 'Um modelo que se ajusta perfeitamente a qualquer conjunto de dados.',
        },
        alternativaCorreta: 'a',
      },














      // DIFICIL
      {
        nivel: 33,
        categoria: 'Segurança de Redes',
        pergunta: 'O que é um ataque de negação de serviço (DDoS)?',
        alternativas: {
          a: 'Um ataque que visa roubar informações confidenciais.',
          b: 'Um ataque que visa tornar um serviço indisponível sobrecarregando-o com tráfego.',
          c: 'Um ataque que se disfarça como tráfego legítimo.',
          d: 'Um ataque que manipula dados durante a transmissão.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 34,
        categoria: 'Criptografia',
        pergunta: 'Qual é a principal diferença entre criptografia simétrica e assimétrica?',
        alternativas: {
          a: 'A criptografia simétrica usa uma chave pública e privada, enquanto a assimétrica usa apenas uma chave compartilhada.',
          b: 'A criptografia simétrica usa a mesma chave para criptografar e descriptografar, enquanto a assimétrica usa chaves diferentes.',
          c: 'A criptografia simétrica é mais segura do que a assimétrica.',
          d: 'A criptografia assimétrica é mais rápida do que a simétrica.',
        },
        alternativaCorreta: 'b',
      },
      {
        nivel: 35,
        categoria: 'Hacking Ético',
        pergunta: 'O que é engenharia social em cibersegurança?',
        alternativas: {
          a: 'Um método para criptografar dados confidenciais.',
          b: 'Uma técnica que usa a força bruta para quebrar senhas.',
          c: 'A manipulação psicológica de pessoas para obter informações confidenciais.',
          d: 'Um tipo de ataque de negação de serviço.',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 36,
        categoria: 'Segurança em Aplicações Web',
        pergunta: 'O que é um ataque de injeção de código?',
        alternativas: {
          a: 'Inserir códigos JavaScript maliciosos em entradas de dados.',
          b: 'Manipular dados durante a transmissão.',
          c: 'Inserir comandos ou códigos maliciosos em entradas de dados para explorar vulnerabilidades.',
          d: 'Uma técnica para ocultar a presença de malware em um sistema.',
        },
        alternativaCorreta: 'c',
      },
      {
        nivel: 37,
        categoria: 'Firewalls e IDS/IPS',
        pergunta: 'Qual é a diferença entre um firewall e um sistema de detecção/prevenção de intrusões (IDS/IPS)?',
        alternativas: {
          a: 'Um firewall controla o acesso de entrada e saída, enquanto um IDS/IPS monitora e analisa o tráfego em busca de atividades suspeitas.',
          b: 'Um firewall protege contra vírus, enquanto um IDS/IPS protege contra ataques físicos.',
          c: 'Um firewall é um hardware, enquanto um IDS/IPS é um software.',
          d: 'Um IDS/IPS é usado apenas para proteger redes sem fio.',
        },
        alternativaCorreta: 'a',
      },
      {
        nivel: 38,
        categoria: 'Compliance e Ética em Segurança',
        pergunta: 'O que é GDPR (Regulamento Geral de Proteção de Dados) e qual é seu objetivo?',
        alternativas: {
          a: 'Um padrão de criptografia amplamente utilizado.',
          b: 'Uma lei de cibersegurança aplicável apenas a empresas europeias.',
          c: 'Um conjunto de regulamentos para proteger a privacidade e os dados pessoais dos cidadãos da União Europeia.',
          d: 'Uma organização internacional de segurança cibernética.',
        },
        alternativaCorreta: 'c',
      }
    ];

    return perguntas;
  }
}
