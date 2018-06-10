import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgDashboardComponent } from './dg-dashboard.component';
import { DgDog } from '../models/dg-dog';

describe('DgDashboardComponent', () => {
  let component: DgDashboardComponent;
  let fixture: ComponentFixture<DgDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgDashboardComponent ]
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
    let dog : DgDog = component.dogs[0];

    expect(dog.name).toEqual('Flint');
  });
});
