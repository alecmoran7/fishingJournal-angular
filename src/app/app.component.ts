import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fishing Journal';

  constructor(private appService: AppService) {}

  newFishForm = new FormGroup({
    species: new FormControl('', Validators.nullValidator && Validators.required),
    weight: new FormControl('', Validators.nullValidator && Validators.required),
    location: new FormControl('', Validators.nullValidator && Validators.required),
    lure: new FormControl('', Validators.nullValidator && Validators.required)
  });

  fishData: any[] = [];
  userCount = 3;

  ngOnInit() {}

  onSubmit() {
    console.log(this.newFishForm.value);
    const data = this.appService.addFish(this.newFishForm.value);
    this.userCount = this.userCount + 1;
    this.newFishForm.reset();

  }

  getAllFishData() {
    this.fishData = this.appService.getFishData();
  }

}
