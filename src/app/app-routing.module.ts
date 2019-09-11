import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { FormGameComponent } from './components/form-game/form-game.component';
import { ListUsersComponent } from './components/list-users/list-users.component';


const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: ListGamesComponent },
  { path: 'add', component: FormGameComponent },
  { path: 'users', component: ListUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
