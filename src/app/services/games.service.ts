import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Games } from '../classes/games';



@Injectable({
  providedIn: 'root'
})
export class GamesService {
  URI = 'http://localhost:3000/games'
  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(this.URI);
  }
  ablePost() {
    return this.http.get(`${this.URI}/ablePost`);
  }
  //metodo de busqueda
  findOneGame(game: any) {
    return this.http.get(`${this.URI}/find/${game}`);
  }

  newGame(game: Games) {
    return this.http.post(`${this.URI}/`, game);
  }
  deleteGAme(id) {
    if (confirm('¿Esta seguro que quiere eliminar ?')) {
      return this.http.delete(`${this.URI}/${id}`)
    }
  }
}
