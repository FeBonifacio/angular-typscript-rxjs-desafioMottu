// favoritos.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private contadorFavoritosSource = new BehaviorSubject<number>(0);
  contadorFavoritos$ = this.contadorFavoritosSource.asObservable();

  constructor() {}

  setContadorFavoritos(contador: number) {
    this.contadorFavoritosSource.next(contador);
  }
}
