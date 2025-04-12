import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contactUsComponent } from './contact-us.component';

describe('contactUsComponent', () => {
  let component: contactUsComponent;
  let fixture: ComponentFixture<contactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [contactUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(contactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
