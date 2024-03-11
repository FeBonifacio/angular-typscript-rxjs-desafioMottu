// InicioComponent.ts
import { Component, OnInit } from '@angular/core';
import { RickAndMortyService, Character } from '../services/rick-and-morty.service';
import { Router } from '@angular/router';
import { FavoritosService } from '../services/favorite.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  characters: Character[] = [];
  searchText: string = '';
  naoExiste: boolean = false;
  favoritos: Character[] = [];
  contadorFavoritos: number = 0;

  constructor(
    private router: Router,
    private rickAndMortyService: RickAndMortyService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    this.loadCharacters();
    this.loadFavoritos(); // Carregar os favoritos ao inicializar o componente
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

  filterCharacters() {
    this.naoExiste = false;
    if (this.searchText === '') {
      this.loadCharacters();
      return;
    }
    const filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    if (filteredCharacters.length === 0) {
      this.naoExiste = true;
    }
    this.characters = filteredCharacters;
  }

  onSearchInput(e: any) {
    this.searchText = e.target.value;
    this.filterCharacters();
  }

  onSearchKey(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.filterCharacters();
    }
  }

  adicionarFav(character: Character) {
    if (!this.isFavorito(character)) {
      this.favoritos.push(character);
      this.contadorFavoritos++;
      this.favoritosService.setContadorFavoritos(this.contadorFavoritos); // Atualizar contador de favoritos
      this.saveFavoritos(); // Salvar os favoritos atualizados no localStorage
    }
  }

  removeFavorito(character: Character) {
    const index = this.favoritos.indexOf(character);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
      this.contadorFavoritos = Math.max(0, this.contadorFavoritos - 1);
      this.favoritosService.setContadorFavoritos(this.contadorFavoritos); // Atualizar contador de favoritos
      this.saveFavoritos(); // Salvar os favoritos atualizados no localStorage
    }
  }


  isFavorito(character: Character) {
    return this.favoritos.includes(character);
  }

  telaFavoritos() {
    this.router.navigate(['/favorito']); // Navegar para a tela de favoritos
  }

  // Método para salvar os favoritos no localStorage
  private saveFavoritos() {
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }

  // Método para carregar os favoritos do localStorage
  private loadFavoritos() {
    const favoritosString = localStorage.getItem('favoritos');
    if (favoritosString) {
      this.favoritos = JSON.parse(favoritosString);
      this.contadorFavoritos = this.favoritos.length; // Atualizar o contador de favoritos
    }
  }
}
