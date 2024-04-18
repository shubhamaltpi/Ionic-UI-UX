import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BussinessPage } from './bussiness.page';

describe('BussinessPage', () => {
  let component: BussinessPage;
  let fixture: ComponentFixture<BussinessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BussinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
