import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweventFormComponent } from './newevent-form.component';

describe('NeweventFormComponent', () => {
  let component: NeweventFormComponent;
  let fixture: ComponentFixture<NeweventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeweventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeweventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
