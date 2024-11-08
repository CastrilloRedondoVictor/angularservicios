import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/Comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css',
  providers: [ServiceComics]
})

export class LibreriaComponent implements OnInit {
  comics!: Comic[];
  favorito: Comic | null;

  constructor(
    private _serviceComics: ServiceComics
  ) {
    this.favorito = null;
  }
  ngOnInit(): void {
    this.comics = this._serviceComics.getComics()
  }

  setFavorito(comic: any) {
    this.favorito = comic
  }

  newComic(comic: any){
    this.comics.push(comic)
  }
}
