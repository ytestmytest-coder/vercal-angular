import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { provideRouter } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
      provideRouter([])
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is Admin logged in test', ()=>{
    component.isUserAdmin()
    expect(component.adminLogged).toBe(true)
  })

  it('check nav menu when admin is logged in', ()=>{
    component.isUserAdmin()
    expect(el.queryAll(By.css('.nav-menu a')).length).toBe(4)
    expect(el.queryAll(By.css('.nav-menu a'))[3].nativeElement.textContent,"Create")
  })

});
