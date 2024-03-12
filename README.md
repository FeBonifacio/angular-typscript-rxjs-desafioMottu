# RickAndMorty

Mottu Front-end Challenge<br/>
Olá! Primeiramente, parabéns por ter avançado ao desafio técnico para front-end da Mottu!<br/>

DESAFIO
Aplicação de consulta, visualização e cadastro de personagens favoritos do seriado Rick & Morty.<br/>

API
Na aplicação, será utilizada a API pública rickandmortyapi para o consumo das requisições dos personagens, deve ser utilizado a abordagem REST.<br/>

PROTÓTIPO<br/>
Link Figma<br/>

REQUISITOS<br/>
Deve-se criar uma aplicação Angular, atendendo os seguintes requisitos:<br/>

Buscar um personagem pelo nome;<br/>
Exibir informações mínimas sobre o(s) personagem(ns) caso ele(s) exista(m);<br/>
Registrar o personagem na lista de favoritos utilizando alguma biblioteca de controle de estado global (NgRx, Ngxs, Akita) ou utilizar os Subjects do RxJs;<br/>
O contador no topo da página deve ser atualizado dinamicamente em tempo real;<br/>
Visualizar a lista de personagens favoritos;<br/>
Remover o personagem da lista de favoritos;<br/>
DIFERENCIAL<br/>
Busca por nome: utilizar operadores do RxJs para deixar mais eficiente a pesquisa e fazer uma nova chamada na API para o filtro não ficar no front-end;<br/>
Utilizar o pipe async no contador dos favoritos no header;<br/>
Adicionar ao projeto a fonte personalizada que foi utilizada no prótotipo: Google Fonts;<br/>
Otimizar o uso de diretivas estruturais;<br/>
Carregamento lento dos módulos das páginas;<br/>
Layout responsivo;<br/>
Fazer o deploy da aplicação;<br/>
Seja criativo. Você decide quais funcionalidades irá incluir além dos requisitos;<br/>
HISTÓRIAS DE USUÁRIO<br/>
Buscar personagem.<br/>
Ao pesquisar um personagem, gostaria de ver nome, genero e sua foto(se existir) antes de decidir favoritá-lo.<br/>
Ao pesquisar um personagem, gostaria de salvá-lo para que fique listado nos meus favoritos.<br/>
Ao pesquisar um um personagem que não existe, gostaria de ser avisado que ele não existe.<br/>
🚀 TECNOLOGIAS<br/>
Tecnologias obrigatórias:<br/>
<br/>
Angular 13+<br/>
Typescript<br/>
RxJs<br/>
Tecnologias opcionais:<br/>
Angular Material<br/>
Bootstrap<br/>
NgRx<br/>
NGXS<br/>
Envio da solução<br/>
Você deve criar um novo repositóro público, implementar a solução e enviar para gente o link do seu repositório.<br/>


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
