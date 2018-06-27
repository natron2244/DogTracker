import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as moment from 'moment';

import { DgDashboardComponent } from './dg-dashboard.component';
import { DgDog } from '../models/dg-dog';
import { DgUser } from '../models/dg-user';
import { DgUserService } from '../api-services/dg-user.service';
import { Observable } from 'rxjs';
import { DgDogService } from '../api-services/dg-dog.service';


describe('DgDashboardComponent', () => {
  let component: DgDashboardComponent;
  let fixture: ComponentFixture<DgDashboardComponent>;
  let userServiceStub: Partial<DgUserService>;
  let dogServiceStub: Partial<DgDogService>;

  userServiceStub = {
    getUser() {
      return Observable.create((observer) => {
        const user = new DgUser(10, 'natron2244', 'Nathan', 'Christensen');
        observer.next(user);
      });
    }
  };
  dogServiceStub = {
    getDogs() {
      return Observable.create((observer) => {
        const dog = new DgDog('Flint', 150, moment('2012-12-25'));
        observer.next([dog]);
      });
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgDashboardComponent],
      providers: [
        {provide: DgUserService, useValue: userServiceStub },
        {provide: DgDogService, useValue: dogServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have dogs info', () => {
    const dog: DgDog = component.dogs[0];

    expect(dog.name).toEqual('Flint');
  });
});
