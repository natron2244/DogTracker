import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgAddDogComponent } from './dg-add-dog.component';

describe('DgAddDogComponent', () => {
  let component: DgAddDogComponent;
  let fixture: ComponentFixture<DgAddDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgAddDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgAddDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
