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
    const favoritosString = localStorage.getItem('favoritos');
    if (favoritosString) {
      this.favoritos = JSON.parse(favoritosString);
    }
  }

  voltarInicio() {
    this.router.navigate(['#'])
  }
}
