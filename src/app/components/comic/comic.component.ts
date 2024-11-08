import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/Comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css'
})
export class ComicComponent {

  @Input() comic !: Comic;

  @Output() setFavorito = new EventEmitter();


  setFavoritoHijo(event: any) {
    this.setFavorito.emit(this.comic)
  }

}
