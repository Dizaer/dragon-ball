import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlanetsApiService {

  constructor(
    private httpDb: HttpClient
  ) { }

  obtenerPlanetas():Observable<any> {
    return this.httpDb.get('https://dragonball-api.com/api/planets?limit=30')
  }

  obtenerPlaneta(id:any):Observable<any> {
    return this.httpDb.get(`https://dragonball-api.com/api/planets/${id}`)
  }
}
