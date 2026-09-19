import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayout } from './main-layout';
import { Footer } from '../footer/footer';
import { ActivatedRoute, provideRouter, RouterLink, RouterOutlet } from '@angular/router';
import { Blog } from '../../features/blog/blog';
import { Header } from '../header/header';

describe('MainLayout', () => {
  let component: MainLayout;
  let fixture: ComponentFixture<MainLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayout, Header, Footer,RouterLink,RouterOutlet, Blog],
      providers: [
      provideRouter([])
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
