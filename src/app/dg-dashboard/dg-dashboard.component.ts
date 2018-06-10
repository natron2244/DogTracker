import { Component, OnInit } from '@angular/core';
import { DgDog } from '../models/dg-dog';

@Component({
  selector: 'dg-dashboard',
  templateUrl: './dg-dashboard.component.html',
  styleUrls: ['./dg-dashboard.component.less']
})
export class DgDashboardComponent implements OnInit {
  dogs : DgDog[];

  constructor() { 
    
  }

  ngOnInit() {
    let dog = new DgDog('Flint', 150, 5);
    this.dogs = [dog];
  }

}
