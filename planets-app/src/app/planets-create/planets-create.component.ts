import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  public planetService: PlanetService;
 

  constructor(planetService: PlanetService) {
    this.planetService = planetService;
  }



  ngOnInit() {
  }
  createPlanet(name:string, moon:string, distance:string){
    var moons = parseInt(moon);
    var distances = parseInt(distance);

    this.planetService.addPlant(name, moons, distances);
  }

}
