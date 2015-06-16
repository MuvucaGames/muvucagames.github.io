#Muvuca Games Blog

Você pode acessar o blog pelo link [muvucagames.github.io](http://muvucagames.github.io/).

## Pré-Requisitos

Para rodar este projeto na sua máquina, você vai precisar ter instalado o seguinte:

* [Ruby](https://www.ruby-lang.org/pt/downloads/) ou [RVM](http://rvm.io);
* [Bundler](http://bundler.io/);

## Desenvolvendo

Fazer o clone/fork do projeto e baixar em sua máquina, então, na raiz do projeto, executar o comando:

```
bundle install
```

Este comando baixa todas as dependências necessárias para o projeto, o que na hoje seria apenas a versão do jekyll. Além disso ele garante que todos que estiverem trabalhando no projeto possuirão a mesma versão do jekyll, para evitar divergências.


## Testando localmente

Após fazer suas mudanças no site, executar o seguinte comando para compilar o projeto e testar localmente as mudanças antes de subir o projeto no github:

```
bundle exec jekyll serve
```

E então acesse este endereço para ver as alterações: (http://localhost:4000)
