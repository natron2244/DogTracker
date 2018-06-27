import { Component, OnInit, Injectable } from '@angular/core';
import { DgDog } from '../models/dg-dog';
import { DgUser } from '../models/dg-user';
import { DgUserService } from '../api-services/dg-user.service';
import { DgDogService } from '../api-services/dg-dog.service';

@Injectable()
@Component({
  selector: 'app-dg-dashboard',
  templateUrl: './dg-dashboard.component.html',
  styleUrls: ['./dg-dashboard.component.less']
})
export class DgDashboardComponent implements OnInit {
  dogs: DgDog[];
  user: DgUser;

  constructor(private userService: DgUserService, private dogService: DgDogService) {

  }

  ngOnInit() {
    this.dogService.getDogs().subscribe(dogs => {
      this.dogs = dogs;
    });
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
