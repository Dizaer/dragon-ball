import { Component, OnInit } from '@angular/core';
import { CharactersAPIService } from './characters-api.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { raceWith } from 'rxjs';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{
  charactersData:any[] = [];
  filter: any;

  constructor(
    private charactersAPI: CharactersAPIService,
    private fb: FormBuilder
  ){
    this.filter = this.fb.group({
      limit:['10', [Validators.max(100)]],
      affiliation:['Z fighter'],
    })
  }

  ngOnInit(): void {
    this.cargarData();
  }
    
   cargarData(){
    this.charactersAPI.obtener(this.filter.value).subscribe((res:any)=>{
      this.charactersData = res;      
    });
   }

  filtrar(){
    console.log(this.filter.value);
    this.cargarData();
    this.enviarData();
  }

  enviarData(){
    this.charactersAPI.sendData(this.filter.value).subscribe((res:any)=>{
      console.log(this.enviarData);
    });
  }

  showCharacter(id: number){
    this.charactersAPI.obtenerPersonaje(id).subscribe((res:any)=>{
      console.log(res);
    });
    this.charactersAPI.actualizarPersonaje(id, this.filter.value).subscribe((res:any)=>{
      console.log(res);
    });
  }

}
