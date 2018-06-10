import { Component, OnInit } from '@angular/core';
import { DgDog } from '../models/dg-dog';
import { DgUser } from '../models/dg-user';

@Component({
  selector: 'dg-dashboard',
  templateUrl: './dg-dashboard.component.html',
  styleUrls: ['./dg-dashboard.component.less']
})
export class DgDashboardComponent implements OnInit {
  dogs : DgDog[];
  user = new DgUser(1, 'Natron2244', 'Nathan', 'Christensen');

  constructor() { 

  }

  ngOnInit() {
    let dog = new DgDog('Flint', 150, 5);
    this.dogs = [dog];
  }

}
