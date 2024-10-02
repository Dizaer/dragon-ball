import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlanetsApiService } from '../planets-api.service';

@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.css'
})
export class PlanetDetailComponent implements OnInit {
  planetData:any = {};

  constructor(
    private planetAPI: PlanetsApiService,
    private activeRoute: ActivatedRoute
  ){ }
  
  ngOnInit(): void {
    this.cargarData();
  }

  cargarData(){
    this.planetAPI.obtenerPlaneta(this.activeRoute.snapshot.paramMap.get('id')).subscribe((res:any)=>{
      this.planetData = res;
    })
  }
}
