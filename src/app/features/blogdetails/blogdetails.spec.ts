import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogdetails } from './blogdetails';

describe('Blogdetails', () => {
  let component: Blogdetails;
  let fixture: ComponentFixture<Blogdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogdetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Blogdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
