import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../services/rick-and-morty.service';
import { Router } from '@angular/router';
import { FavoritosService } from '../services/favorite.service'; // Importe o serviço de favoritos aqui

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {
  @Input() contadorFavoritos: number = 0; // Receba o contador de favoritos como input
  @Output() favoritoAlterado = new EventEmitter<number>();

  favoritos: Character[] = [];

  constructor(
    private router: Router,
    private favoritosService: FavoritosService // Injete o serviço de favoritos
  ) {}

  ngOnInit(): void {
    this.loadFavoritos();
  }

  toggleFavorite(character: Character) {
    if (this.isFavorito(character)) {
      this.removeFavorito(character);
      this.diminuirConta();
    } else {
      this.adicionarFav(character);
      this.aumentarConta();
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
    this.atualizarContador(this.favoritos.length); // Atualizar o contador quando os favoritos são salvos
  }

  private loadFavoritos() {
    const favoritosString = localStorage.getItem('favoritos');
    if (favoritosString) {
      this.favoritos = JSON.parse(favoritosString);
      this.atualizarContador(this.favoritos.length); // Atualizar o contador ao carregar os favoritos
    }
  }

  private aumentarConta() {
    this.contadorFavoritos++;
    this.favoritosService.setContadorFavoritos(this.contadorFavoritos); // Atualizar o contador no serviço de favoritos
  }

  private diminuirConta() {
    if (this.contadorFavoritos > 0) {
      this.contadorFavoritos;
      this.favoritosService.setContadorFavoritos(this.contadorFavoritos); // Atualizar o contador no serviço de favoritos
    }
  }


  private atualizarContador(valor: number) {
    this.contadorFavoritos = valor;
    this.favoritosService.setContadorFavoritos(this.contadorFavoritos); // Atualizar o contador no serviço de favoritos
  }
}
