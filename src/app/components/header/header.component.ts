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

  constructor(
    private router: Router,
    private favoritosService: FavoritosService
    ) {}

    ngOnInit() {
      this.favoritosService.contadorFavoritos$.subscribe(contador => {
        this.contadorFavorito = contador;
      });
    }

  navegarParaFavoritos() {
    this.router.navigate(['/favoritos']);
  }
}
