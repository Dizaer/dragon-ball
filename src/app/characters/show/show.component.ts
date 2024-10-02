import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CharactersAPIService } from '../characters-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit{
  characterData:any = {};

  constructor(
    private characterAPI: CharactersAPIService,
    private activeRoute: ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.cargarData();
  }

  cargarData(){
    this.characterAPI.obtenerPersonaje(this.activeRoute.snapshot.paramMap.get('id')).subscribe((res:any)=>{
      console.log(res);
      this.characterData = res;
    });
  }
}
