import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { TimerComponent } from './components/timer/timer.component';
import { IcebergComponent } from './components/iceberg/iceberg.component';
import { ModalPerguntasComponent } from './components/modal-perguntas/modal-perguntas.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, GameComponent, TimerComponent, IcebergComponent, ModalPerguntasComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
