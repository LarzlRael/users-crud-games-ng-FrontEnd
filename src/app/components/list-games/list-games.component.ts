import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { UsersService } from 'src/app/services/users.service';
import { Games } from '../../classes/games'

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  constructor(private gamesService: GamesService, private userService: UsersService) { }

  ngOnInit() {
    this.listUser();
    this.listAbleGames();
  }

  titulo: string;
  
  games: any = [];
  users: any = [];
  ablePost: any = [];
  findGame: any = [];
  listUser() {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res
         // console.log(res)
      },
      err => console.log(err)
    )
  }
  /* 
  listGames() {
    this.gamesService.getGames().subscribe(
      res => {
        console.log(res),
          this.games = res
      },
      err => console.log(err)

    )
  }
  */
  deleteGame(id) {
    this.gamesService.deleteGAme(id).subscribe(
      res => { console.log(res), this.listAbleGames() },
      err => console.log(err)
    )
  }
  listAbleGames() {
    this.gamesService.ablePost().subscribe(
      res => {
        this.ablePost = res[0],

          console.log('post abilitados', this.ablePost)
      },
      err => console.log(err)
    )
  }
  findGames() {
    console.log('eleento enviado : ' + this.titulo);
    this.gamesService.findOneGame(this.titulo).subscribe(
      res => {
        this.findGame = res[0],  
        console.log(this.findGame)
      },
      err => console.log(err)
    )

  }
}
