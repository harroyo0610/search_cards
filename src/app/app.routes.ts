import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RostersComponent } from './components/rosters/rosters.component';
import { RosterComponent } from './components/roster/roster.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'rosters', component: RostersComponent },
	{ path: 'roster/:id', component: RosterComponent },
	{ path: 'buscador/:termino', component: BuscadorComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
