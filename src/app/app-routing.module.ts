import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; // Importe o componente InicioComponent
import { FavoritoComponent } from './favorito/favorito.component';

const routes: Routes = [
  {path: 'favoritos', component: FavoritoComponent},
  { path: '', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
