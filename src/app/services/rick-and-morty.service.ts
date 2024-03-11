import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Character {
  name: string;
  image: string;
  species: string;
}

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.results.map((character: any) => ({
        name: character.name,
        image: character.image,
        species: character.species
      })))
    );
  }
}
