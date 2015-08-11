---
layout: post
title:  "REUNIÃO DOMINGO Game Design"
date:   2015-08-02 15:25:00
categories: gamedesign
author: Pablo Saraiva
---

**QUANDO?**

Domingo, 02/08/2015. Às 16h00.

**ONDE?**

https://appear.in/MuvucaGames_GameDesign

**POR QUÊ?**

- Colocar todos os membros ativos do Game Design na "mesma página";
- Fechar as definições do Level do protótipo;
- Definir os próximos passos.

**Agenda**

- O produto do Game Design é o Game Design Document (GDD)
- Mecânica dos personagens jogáveis
- Mecânicas do Level
- Criar o primeiro puzzle
- Criar um level para ser implementado no protótipo
- Prêmio em dinheiro do gameshow
- Nomenclatura P1 e P2

#Resultado#

##O produto do Game Design é o Game Design Document (GDD)##



Todas as decisões do jogo devem ser refletidas no GDD

---

Definimos que todas as tarefas do Game Design vão possuir um checklist com os itens necessários para conclusão, além dos itens:

* aprovado;
* GDD atualizado.

Quando o Game Designer concluir a tarefa e ela for aprovada pelo organizador do Game Design, o próprio Designer fica responsável por atualizar o GDD.
Após a atualização do GDD, se não houver mais o que ser discutido à respeito da tarefa, ela deve ser arquivada.

---

Ativamos no board de Game Design o aviso de cards inativos; Esse é um indicativo de que o card merece atenção ou deve ser arquivado.

---

@titooliveira vai atualizar o GDD com as definições sobre as mecânicas dos personagens.

---

Vão ser criadas tarefas para atualizar o GDD com outras definições que já foram concluídas mas ainda não fazem parte do documento.

##Mecânica dos personagens jogáveis##



A ação de correr vai ser removida das mecânicas dos personagens.

---

Os dois personagens podem ser controlados pelo jogador de forma independente. Não haverá ação de "seguir".

---

O Level Designer é responsável por fazer os leveis de forma que os dois personagens sempre cheguem ao final da fase.

Foram propostas algumas alternativas para momentos em que se quer que os dois personagens andem juntos.

* Triggers que fazem os dois darem uma pequena caminhada automaticamente;
* Esteiras que levam os dois personagens a um outro local;
* Quedas que levam os personagens a um outro local.

O Level Designer tem a liberdade para resolver, mas é importante que os dois cheguem ao fim.

---

O Level pode levar diretamente ao próximo level através de um caminho (corredor, estrada etc.) nesse caso haverá checkpoint mas o jogador continuará jogando continuamente; ou pode finalizar com uma entrada em uma porta, carro, elevador etc. Nesse caso, haverá uma transição entre as duas cenas (fade out / fade in, por exemplo).
A transição, quando for o caso, deve ser definida pelos artistas.

##Mecânicas do Level##



Foi definido que existe a opção de morte, como abismos, espinhos etc.

---

Foi definido que cada puzzle contabilizará o tempo de resolução do jogador.

Futuramente pode ser implementado um ranking global para o jogador comparar o seu tempo com o tempo de outros jogadores;

---

O Level Designer deve garantir que não seja possível que o jogador retorne para o puzzle anterior.

---

A câmera segue o personagem ativo.

---

O jogador não pode controlar a câmera.

---

Caso o personagem pule, a câmera sobe um pouco e caso o personagem abaixe, a câmera também desce um pouco. Permitindo ao jogador alguma visão do que está acima ou abaixo de onde o personagem ativo se encontra.

---

Quando o jogador trocar a câmera de um personagem para o outro, a câmera deve percorrer o caminho entre os dois personagens, permitindo que o jogador veja o que há entre os dois e também tenha uma noção da distância entre eles.

---

Sem minimapa, por enquanto.

---

Precisamos definir os elementos básicos dos leveis. Serão criadas tarefas específicas para esse fim.

Com base nesses elementos, o Level Designer vai criar os Puzzles.
Caso o Level Designer precise de um elemento que ainda não existe, ele deve sugerir a criação do elemento antes de incluí-lo no puzzle.

##Criar o primeiro puzzle##



Já havia um puzzle criado pelo @titooliveira, que será usado no protótipo.

##Criar um level para ser implementado no protótipo##



O @titooliveira ficou responsável por definir o level que será utilizado no protótipo.

##Prêmio em dinheiro do gameshow##



Definimos que não haverá opção de dividir o dinheiro com o casal ao final do Game Show pois não haveria ganho em relação ao Game Design. A equipe de roteiro já estava ciente da possível mudança e já havia informado que essa escolha também não faria grande diferença no roteiro.

---

Definimos que não haverá dinheiro para ser utilizado no jogo. O dinheiro ganho no gameshow será representado simbolicamente, como os outros itens do jogo, sem valor concreto definido.

##Alterar a nomenclatura P1 e P2##



Sugestão: Personagem Forte e Personagem Ágil

##Outras discussões fora dos itens da agenda##



Foi definido que as fases terão um botão "reset", caso o jogador queira recomeçar ou se encontre em uma posição sem saída.

---

###Votação###

É preciso definir o vocabulário do projeto.

Cada elemento do jogo precisa ter um nome.

Por exemplo, uma porta que seja acionável por um botão. Pode ser "Porta Acionável por Botão".
Um botão que seja acionável por peso, pode ser "Botão acionável por Peso" ou "Actionable Button by Weight".

Considerando que:

1. A programação será feita toda em inglês. Os termos em português podem ficar um pouco estranhos no código;
1. Os nomes seriam usados na programação como nomes próprios, porém todas as outras coisas referentes ao objeto continuaram em inglês de qualquer forma;
1. Termos em inglês no GDD podem afastar algumas pessoas que queiram ajudar no Game Design ou no entendimento do projeto mas não dominam o inglês;
1. Caso o Game Design defina os termos em português e a programação utilize os termos em inglês, deve haver um dicionário de tradução dos termos em algum lugar para que a correspondência seja clara.

Precisamos votar as seguintes alternativas.

1. Game Design define os nomes em português e programação implementa os nomes em português.
1. Game Design define os nomes em inglês e programação implementa os nomes em inglês.
1. Game Design define os nomes em português e programação implementa os nomes em inglês.

---

A equipe de programação pediu para lembrar aos Game Designers que podem brincar com elementos de física na criação dos elementos do jogo. É possível criar superfícies viscosas ou escorregadias, é possível colocar elementos com vento etc.

---

Discutimos a amplitude da câmera. Há uma sugestão da equipe de artes mas vamos testar como fica no protótipo.

---

Foi discutida a mecânica da caixa pesada. Uma sugestão é que, caso a caixa seja pesada demais, haja uma forma visual do jogador entender isso através de animações dos personagens e que o personagem deve sair de baixo da caixa, sem conseguir carregá-la. Caso o jogador fique tempo demais embaixo de uma caixa pesada, a caixa deve esmagar o jogador.

---

Como os personagens não vão ter nomes. As tarefas referentes aos nomes dos personagens serão arquivadas.

---

Definimos que os personagens não morrem quando caem, independente da altura. (exceto em caso de abismos infinitos)
