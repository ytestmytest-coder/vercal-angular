import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Saveblog } from './saveblog';

describe('Saveblog', () => {
  let component: Saveblog;
  let fixture: ComponentFixture<Saveblog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saveblog],
    }).compileComponents();

    fixture = TestBed.createComponent(Saveblog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
