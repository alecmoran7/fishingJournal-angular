import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  fishData = [
    {
      species: 'Largemouth Bass',
      weight: '8.5',
      location: 'Twin Silo Park Pond',
      lure: 'Swimbait - rosekuli - green'
    },
    {
      species: 'Common Carp',
      weight: '8',
      location: 'Twin Silo Park Pond',
      lure: 'Method lead - packbait'
    },
    {
      species: 'Yellow Bullhead Catfish',
      weight: '1',
      location: 'Twin Silo Park Pond',
      lure: 'Nightcrawler'
    },
  ];

  getFishData() {
    return this.fishData;
  }

  addFish(newFish: any) {
    return this.fishData.push(newFish);
  }

}
