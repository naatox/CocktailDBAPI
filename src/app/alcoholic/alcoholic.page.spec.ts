import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlcoholicPage } from './alcoholic.page';

describe('AlcoholicPage', () => {
  let component: AlcoholicPage;
  let fixture: ComponentFixture<AlcoholicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlcoholicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
