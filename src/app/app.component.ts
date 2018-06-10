import { Component } from '@angular/core';
import { DgUser } from './models/dg-user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  user = new DgUser(1, 'Natron2244', 'Nathan', 'Christensen');
}
