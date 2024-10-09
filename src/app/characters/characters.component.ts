import { Component, OnInit } from '@angular/core';
import { CharactersAPIService } from './characters-api.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    LogoComponent
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})

export class CharactersComponent implements OnInit {
  charactersData: any[] = [];
  afiliacionez: any[] = [];
  filter: any;

  constructor(
    private charactersAPI: CharactersAPIService,
    private fb: FormBuilder
  ) {
    this.filter = this.fb.group({
      limit: ['58', [Validators.max(100)]],
      affiliation: [''],
    });
  }

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData() {
    const filtro = this.filter.value;
    this.charactersAPI.obtener(filtro).subscribe((res: any) => {
      this.charactersData = filtro.affiliation ? res : res.items;

      this.afiliacionez = this.charactersData.reduce((obj, item) => {
        const affiliation = item.affiliation;
        if (!obj[affiliation]) {
          obj[affiliation] = [];
        }
        obj[affiliation].push(item);
        return obj;
      }, {});
      console.log(this.afiliacionez);
    });
  }

  filtrar() {
    console.log(this.filter.value);
    this.cargarData();
  }

  showCharacter(id: number) {
    this.charactersAPI.obtenerPersonaje(id).subscribe((res: any) => {
      console.log(res);
    });
  }
}
