import { Component, OnInit, Injectable } from '@angular/core';
import { DgDog } from '../models/dg-dog';
import { DgUser } from '../models/dg-user';
import { DgUserService } from '../dg-user.service';

@Injectable()
@Component({
  selector: 'app-dg-dashboard',
  templateUrl: './dg-dashboard.component.html',
  styleUrls: ['./dg-dashboard.component.less']
})
export class DgDashboardComponent implements OnInit {
  dogs: DgDog[];
  user = new DgUser(1, 'mbiggs', 'Mike', 'Biggs');

  constructor(private userService: DgUserService) {

  }

  ngOnInit() {
    const dog = new DgDog('Flint', 150, 5);
    this.dogs = [dog];
    this.userService.getUser().subscribe((user: DgUser) => {
      this.user = user;
    });
  }

}
