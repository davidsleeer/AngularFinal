import { Component, OnInit, Input } from '@angular/core';
import { PlanetService } from '../planet.service';

import { Planet } from 'src/app/planet'

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {


  @Input() item : Planet;


  public planetService: PlanetService;


  constructor(planetService: PlanetService) {
    this.planetService = planetService;
  }

  ngOnInit() {
  }

deletePlanet(){
  
}

}
