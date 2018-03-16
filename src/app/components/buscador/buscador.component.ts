import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RostersService } from '../../services/rosters.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  rosters:any[] = [];
  termino:string;
  constructor( private activatedRoute:ActivatedRoute, private _rostersService:RostersService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.rosters = this._rostersService.searchRoster(params['termino']);
    });
  }

}
