import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectFormsComponent } from './object-forms.component';

describe('ObjectFormsComponent', () => {
  let component: ObjectFormsComponent;
  let fixture: ComponentFixture<ObjectFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
