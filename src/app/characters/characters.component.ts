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
  afiliaciones: any[] = ["Z Fighter" ,"Red Ribbon Army" ,"Namekian Warrior", "Freelancer" ,"Army of Frieza", "Pride Troopers" ,"Assistant of Vermoud","God", "Assistant of Beerus", "Villain","Other"]

  constructor(
    private charactersAPI: CharactersAPIService,
    private fb: FormBuilder
  ){
    this.filter = this.fb.group({
      limit:['10', [Validators.max(100)]],
      affiliation:[''],
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
  }

  showCharacter(id: number){
    this.charactersAPI.obtenerPersonaje(id).subscribe((res:any)=>{
      console.log(res);
    });
  }

}
