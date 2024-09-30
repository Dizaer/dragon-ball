import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersAPIService {

  constructor(
    private httpDb: HttpClient
  ) { }

  obtener(filtros:any):Observable<any> {
    return this.httpDb.get(`https://dragonball-api.com/api/characters`,{params:filtros})
  }

  obtenerPersonaje(id : any):Observable<any> {
    return this.httpDb.get(`https://dragonball-api.com/api/characters/${id}`)
  }
}
