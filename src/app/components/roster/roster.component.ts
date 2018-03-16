import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { RostersService } from '../../services/rosters.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styles: []
})
export class RosterComponent {

  roster:any = {};


  constructor( private activatedRoute: ActivatedRoute, private rostersService: RostersService) {
    this.activatedRoute.params.subscribe( params => {
      this.roster = rostersService.getRoster(params['id']);
    });
  }

  ngOnInit() {
  }

}
