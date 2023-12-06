import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NonAlcoholicPage } from './non-alcoholic.page';

describe('NonAlcoholicPage', () => {
  let component: NonAlcoholicPage;
  let fixture: ComponentFixture<NonAlcoholicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NonAlcoholicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
