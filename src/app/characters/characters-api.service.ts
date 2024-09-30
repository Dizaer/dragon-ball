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

  sendData(data : any):Observable<any> {
     return this.httpDb.post(`https://dragonball-api.com/api/characters`, data)
  }

  obtenerPersonaje(id : any):Observable<any> {
    return this.httpDb.get(`https://dragonball-api.com/api/characters/${id}`)
  }

  actualizarPersonaje(id : any, data: any):Observable<any>{
    return this.httpDb.put(`https://dragonball-api.com/api/characters/${id}`, data)
  }
}
