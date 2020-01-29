import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { Planet } from 'src/app/planet'

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  public planetService : PlanetService;

  constructor(planetService: PlanetService) { 
    this.planetService = planetService;
  }

  ngOnInit() {
    
  }

  

}
