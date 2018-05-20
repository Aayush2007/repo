import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskDisplayComponent } from './helpdesk-display.component';

describe('HelpdeskDisplayComponent', () => {
  let component: HelpdeskDisplayComponent;
  let fixture: ComponentFixture<HelpdeskDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
