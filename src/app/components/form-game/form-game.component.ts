import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

import { Games } from '../../classes/games';
import { GamesService } from 'src/app/services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-game',
  templateUrl: './form-game.component.html',
  styleUrls: ['./form-game.component.css']
})
export class FormGameComponent implements OnInit {

  constructor(private serviceUser: UsersService,private gameService : GamesService,
    private route:Router) {


  }
  game: Games = {
    description: '',
    id_user: 0,
    id: 0,
    titulo: '',
    url: ''
  }
  users: any = [];
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.serviceUser.getUsers().subscribe(
      res => {
        console.log(res),
        this.users = res
      },
      err => console.log(err)
    )
  }
  registrar() {

    console.log(this.game);
    this.gameService.newGame(this.game)
    .subscribe(
      res=>{console.log(res),this.route.navigate(['/games'])},
      err=>console.log(err)
    )
    
  }


}
