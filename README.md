#Muvuca Games Blog

Você pode acessar o blog pelo link [muvucagames.github.io](http://muvucagames.github.io/).

## Pré-Requisitos

Para rodar este projeto na sua máquina, você vai precisar ter instalado o seguinte:

* [Ruby](https://www.ruby-lang.org/pt/downloads/);
* [Bundler](http://bundler.io/);

## Guia de Instalação do ruby para usuários Windows

Vi que um pessoal estava com dúvidas em como instalar o ruby no windows, então estou fazendo esta seção para ajudá-los.

Você precisará antes de mais nada, descobrir se o seu computador é 32 bits ou 64 bits. Uma vez definido isto, faça download do [Ruby](http://rubyinstaller.org/downloads/) e [DevKit](http://rubyinstaller.org/downloads/) de acordo com a plataforma do seu Sistema Operacional (32 ou 64).

Certo, com os downloads em mãos, vamos ao passo a passo:

1. Instalar rubyInstaller. Importante notar que ele deve ser instalado em um diretório que não possua espaços em branco no nome, por exemplo: 
  * **Certo:** C:/Ruby
  * **Errado:** C:/Arquivo de Programas/Ruby
2. Na instalação do Ruby, marcar a opção: `Add Ruby executables to your .PATH`
3. Descompactar o **DevKit** no diretório `C: /DevKit`
4. Acessar o diretório `C:/DevKit` via linha de comando e rodar o comando `ruby dk.rb init`
5. Abrir o arquivo `C:/DevKit/config.yml ` e verificar que ele aponta para a pasta de instalação do ruby
6. Executar o comando `ruby dk.rb install` no diretório `C:/DevKit/`

Para maiores detalhes sobre a instalação do DevKit, [leia-me](http://github.com/oneclick/rubyinstaller/wiki/Development-Kit).

## Instalação do **bundler**

Uma vez com o ruby instalado em seu computador, a instalação do bundler é igual para todos os Sistemas Operacionais. Basta executar o seguinte comando:

```
gem install bundler
```

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

E então acesse este endereço para ver as alterações: [localhost:4000](http://localhost:4000)