import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { RostersService } from './services/rosters.service';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RostersComponent } from './components/rosters/rosters.component';
import { RosterComponent } from './components/roster/roster.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    RostersComponent,
    RosterComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    RostersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
