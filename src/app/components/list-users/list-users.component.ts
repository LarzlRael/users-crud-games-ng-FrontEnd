import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../classes/users'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  user: Users = {
    nombre: '',
    apellido: '',
    email: '',
    habilitado: 1

  }
  constructor(private userService: UsersService) { }

  users: any = [];
  allusers: any = [];
  ngOnInit() {
    this.updatePage()
  }

  listUsers() {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res

      },
      err => console.log(err)
    )

  }
  newUser(formuser: NgForm) {
    console.log(this.user)
    this.userService.newUser(this.user)
      .subscribe(
        res => {
          console.log(res),
          this.updatePage()
        },
        err => { console.log(err) }
      );
      this.updatePage()
    formuser.reset();
  }
  eliminar(iduser) {
    this.userService.deleteUser(iduser).subscribe(
      res => {
        console.log(res),
        this.updatePage()
      },
      err => console.log(err)
    )

  }

  allUsers() {
    this.userService.allUsers().subscribe(
      res => {
        this.allusers = res
          // console.log(res)
          
      },
      err => console.log(err)
    );

  }

  habilitar(id) {

    this.userService.ableUser(id).subscribe(
      res => {
        console.log(res),
        this.updatePage()
      },
      err => console.log(err)
    )
  }
  deshabilitar(id) {
    this.userService.deleteUser(id).subscribe(
      res => {
        console.log(res),
        this.updatePage()
      },
      err => console.log(err)
    )
  }

  updatePage(){
    this.listUsers();
    this.allUsers();
  }
}
