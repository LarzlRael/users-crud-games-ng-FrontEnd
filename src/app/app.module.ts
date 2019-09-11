import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { FormGameComponent } from './components/form-game/form-game.component';
import { HttpClientModule } from '@angular/common/http';
//importando el modulo de fomrualrios
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ListGamesComponent,
    ListUsersComponent,
    FormGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
