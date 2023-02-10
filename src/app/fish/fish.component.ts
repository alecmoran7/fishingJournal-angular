import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {

  constructor() { }

  @Input() fishData: any[];

  ngOnInit(): void {
  }

}
