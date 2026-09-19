import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('footer-data-is-correct', () => {
    let navElements = el.queryAll(By.css('.footer-links a'));
    expect(navElements.length).toBe(4)
    expect(navElements[0].nativeElement.textContent).toBe('Home')
    expect(navElements[1].nativeElement.textContent).toBe('About Us')
    expect(navElements[2].nativeElement.textContent).toBe('Contact')
  })
});
