import { Component, OnInit } from '@angular/core';
import { RickAndMortyService, Character } from '../services/rick-and-morty.service'; // Importe o serviço e a interface Character

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  characters: Character[] = []; // Definir uma propriedade para armazenar os personagens
  searchText: string = '' // dfinir tbm prop de busca
  naoExiste: boolean = false; // Defina uma propriedade para controlar a exibição da mensagem de aviso


  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadCharacters(); // carregar os personagens ao inicializar o componente
  }

  loadCharacters() {
    this.rickAndMortyService.getCharacters().subscribe(
      (characters) => {
        this.characters = characters;
      },
      (error) => {
        console.error('Erro ao carregar personagens:', error);
      }
    );
  }

  //filtro
  // Método para filtrar os personagens com base no texto de pesquisa
  filterCharacters() {
    this.naoExiste = false; // Ocultar a mensagem de aviso inicialmente
    if (this.searchText === '') {
      this.loadCharacters(); // Carregar todos os personagens novamente
      return; // Não precisa continuar o filtro
    }
    const filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    if (filteredCharacters.length === 0) {
      this.naoExiste = true; // Exibir a mensagem de aviso se nenhum personagem for encontrado
    }
    this.characters = filteredCharacters; // Atualize os personagens filtrados
}


  onSearchInput(e: any) {
    this.searchText = e.target.value; // Atualize o texto de pesquisa
    this.filterCharacters(); // Filtrar os personagens
  }

  //enter
  onSearchKey(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.filterCharacters();
    }
  }
}
