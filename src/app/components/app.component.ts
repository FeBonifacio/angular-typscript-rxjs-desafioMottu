import { Component, OnInit } from "@angular/core";
import { RickAndMortyService } from "../services/rick-and-morty.service";
import { Character } from "../services/rick-and-morty.service"; // Importe a interface Character aqui

@Component({
  selector: 'app-root',
  templateUrl: '../app.component.html',
  styleUrls: ['../app.component.css']
})

export class AppComponent implements OnInit {
  characters: Character[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
      this.loadCharacters();
  }

  loadCharacters() {
    this.rickAndMortyService.getCharacters().subscribe({
      next: (data) => {
        this.characters  = data;
      },
      error: (error) => {
        console.error('Eles não estão querendo vim não!', error);
      }
    });
  }
}
