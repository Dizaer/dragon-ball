import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanetsApiService } from './planets-api.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LogoComponent
  ],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})

export class PlanetsComponent implements OnInit{
  planetsData:any[] = [];

  constructor(
    private planetsAPI: PlanetsApiService
  ){ }

  ngOnInit(): void {
    this.cargarDta();
  }

  cargarDta(){
    this.planetsAPI.obtenerPlanetas().subscribe((res:any)=>{
      this.planetsData = res.items;
    })
  }
}
