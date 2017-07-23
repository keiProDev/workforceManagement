import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosteringComponent } from './rostering.component';

describe('RosteringComponent', () => {
  let component: RosteringComponent;
  let fixture: ComponentFixture<RosteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
