import { Component, OnInit } from '@angular/core';
import { ServicePersona } from '../../services/service.persona';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrl: './personasapi.component.css',
})
export class PersonasapiComponent implements OnInit {

  public personas!: Array<Persona>;

  constructor(
    private _servicePersona: ServicePersona
  ){}


  ngOnInit(): void {
    this.personas = this._servicePersona.getPersonas().subscribe(response => {
      console.log(response)
    })
  }
}
