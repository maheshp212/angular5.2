import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeventsComponent } from './formevents.component';

describe('FormeventsComponent', () => {
  let component: FormeventsComponent;
  let fixture: ComponentFixture<FormeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
