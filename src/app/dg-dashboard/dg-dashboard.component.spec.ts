import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgDashboardComponent } from './dg-dashboard.component';
import { DgDog } from '../models/dg-dog';
import { DgUser } from '../models/dg-user';
import { DgUserService } from '../dg-user.service';
import { Observable } from 'rxjs';

describe('DgDashboardComponent', () => {
  let component: DgDashboardComponent;
  let fixture: ComponentFixture<DgDashboardComponent>;
  let userServiceStub: Partial<DgUserService>;

  userServiceStub = {
    getUser() {
      return Observable.create((observer) => {
        const user = new DgUser(10, 'natron2244', 'Nathan', 'Christensen');
        observer.next(user);
      });
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgDashboardComponent],
      providers: [ {provide: DgUserService, useValue: userServiceStub } ]
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
