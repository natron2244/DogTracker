
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
// TODO: See Github issue #4, should actaully test the routing works
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DgNavComponent } from './dg-nav.component';

describe('DgNavComponent', () => {
  let component: DgNavComponent;
  let fixture: ComponentFixture<DgNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DgNavComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
