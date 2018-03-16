import { Component, OnInit } from '@angular/core';
import { RostersService, Roster } from '../../services/rosters.service';
@Component({
  selector: 'app-rosters',
  templateUrl: './rosters.component.html',
  styles: []
})
export class RostersComponent implements OnInit {
  rosters:Roster[] = [];
  constructor(private _rostersService:RostersService ) {}

  ngOnInit() {
    this.rosters = this._rostersService.getRosters();
  }

}
