import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerImageSource = new BehaviorSubject<string>("../../../assets/img/Player/Player.png");
  currentPlayerImage = this.playerImageSource.asObservable();

  changePlayerImage(imageUrl: string) {
    this.playerImageSource.next(imageUrl);
  }
}
