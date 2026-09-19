import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogdetails } from './blogdetails';
import { provideRouter } from '@angular/router';

describe('Blogdetails', () => {
  let component: Blogdetails;
  let fixture: ComponentFixture<Blogdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogdetails],
      providers: [
      provideRouter([])
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(Blogdetails);
    component = fixture.componentInstance;
    component.blogDetails = {
    id: 1,
    title: 'Test Blog',
    description: 'Test Description',
    author: 'Test Author',
    date: 'Test Date'
  };
  

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
