import { Injectable } from '@angular/core';
import { Planet } from 'src/app/planet'

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  public planets: Planet[]=[];
  constructor() {}
  
sortingbyDistance() : void {
  this.planets.sort(function (a, b) { return a.DistantcefromSun - b.DistantcefromSun })
}

  addPlant(Name: string, Moons: number, DistantcefromSun: number) {

    this.planets.push(new Planet(Name, Moons, DistantcefromSun));

  }

  removePlanet(planet: Planet) {

    var index = this.planets.indexOf(planet);

    this.planets = this.planets.splice(index, 1);

  }

}
