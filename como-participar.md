---
layout: page
title: Como participar?
permalink: /como-participar/
---

Bem vindo à MuvucaGames. Nós somos uma comunidade de desenvolvimento de games, e estamos abertos a participação de novos colaboradores.

Para participar é simples, veja o vídeo de orientação e siga as etapas. Em pouco tempo você estará ajudando na criação dos games.

Nós usamos a ferramenta Trello para a organização interna, Slack para Chat, e GitHub para o versionamento do jogo.

Se você ainda não tem Trello, [clique aqui para criar uma conta]( https://trello.com/dibraga/recommend).


Como usar o Trello da Muvuca Games:


<div class="youtube-wrapper">
<iframe width="420" height="315" src="https://www.youtube.com/embed/u2iHXkhq5fQ" frameborder="0" allowfullscreen></iframe>
</div><br />

Uma vez que você já tenha uma conta Trello, conecte e preencha o formulário:

<button id="loggedout">
    <a id="connectLink">Conectar ao Trello</a>
</button>

<div>
<form id="entryform" action="javascript:submitEntryFormX()" hidden>
  Qual area voce pretende atuar:
  <br>
  <input type="radio" name="area" value="0" checked>Artes
  <br>
  <input type="radio" name="area" value="1">GameDesign
  <br>
  <input type="radio" name="area" value="2">Roteiro
  <br>
  <input type="radio" name="area" value="3">Programação
  <br>
  <input type="radio" name="area" value="4">Não sei
  <br>
  <input type="radio" name="area" value="5">Varias áreas
  <br>
  <br>
  Comentário:
  <br>
  <textarea name="comment" rows="5" cols="30"></textarea>
  <br>
  <button >Enviar</button>
</form>
</div>

<div id="success" hidden>Sucesso, um admin te adicionara em breve</div>

<script src="/assets/javascript/jquery.min.js"></script>
<script src="https://api.trello.com/1/client.js?key=3a73bd1b8143e3abe1126410ea9c53a5"></script>
<script src="/assets/javascript/trelloForm.js"></script>
