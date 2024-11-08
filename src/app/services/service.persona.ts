import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersona {

  constructor(
    private httpClient: HttpClient
  ){}

  getPersonas(): Observable<any>{
    return this.httpClient.get('https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas')
  }
}
