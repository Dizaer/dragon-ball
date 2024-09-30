import { Routes } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { CharactersComponent } from './characters/characters.component';

export const routes: Routes = [
    {path: 'planets', component: PlanetsComponent},
    {path: 'characters', component: CharactersComponent}
];
