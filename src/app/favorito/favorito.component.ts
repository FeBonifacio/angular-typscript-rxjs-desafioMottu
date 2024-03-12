import { Component, OnInit } from '@angular/core';
import { Character } from '../services/rick-and-morty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {
  favoritos: Character[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadFavoritos();
  }

  toggleFavorite(character: Character) {
    if (this.isFavorito(character)) {
      this.removeFavorito(character);
    } else {
      this.adicionarFav(character);
    }
  }

  voltarInicio() {
    this.router.navigate(['']);
  }

  adicionarFav(character: Character) {
    if (!this.isFavorito(character)) {
      this.favoritos.push(character);
      this.saveFavoritos();
    }
  }

  removeFavorito(character: Character) {
    const index = this.favoritos.findIndex(char => char.name === character.name);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
      this.saveFavoritos();
    }
  }

  isFavorito(character: Character) {
    return this.favoritos.some(char => char.name === character.name);
  }

  private saveFavoritos() {
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }

  private loadFavoritos() {
    const favoritosString = localStorage.getItem('favoritos');
    if (favoritosString) {
      this.favoritos = JSON.parse(favoritosString);
    }
  }
}
