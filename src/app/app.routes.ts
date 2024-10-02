import { Routes } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { CharactersComponent } from './characters/characters.component';
import { ShowComponent } from './characters/show/show.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';

export const routes: Routes = [
    {path: 'planets', component: PlanetsComponent},
    {path: 'planets/:id', component: PlanetDetailComponent},
    {path: 'characters', component: CharactersComponent},
    {path: 'characters/:id', component: ShowComponent},
    {path: '', redirectTo: '/characters', pathMatch: 'full'}
];
