import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritosService } from '../../services/favorite.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  @Input() contadorFavorito: number = 0;
  inicioSelecionado: boolean = true;
  favoritoSelecionado: boolean = false;

  constructor(
    private router: Router,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit() {
    this.favoritosService.contadorFavoritos$.subscribe(contador => {
      this.contadorFavorito = contador;
    });
  }

  mudarColor(tipo: string) {
    if (tipo === 'inicio') {
      this.inicioSelecionado = true;
      this.favoritoSelecionado = false;
    } else {
      this.favoritoSelecionado = true;
      this.inicioSelecionado = false;
    }
  }

  navegarParaFavoritos() {
    this.router.navigate(['/favoritos']);
  }
}
