import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAccountPage } from './add-account.page';

describe('AddAccountPage', () => {
  let component: AddAccountPage;
  let fixture: ComponentFixture<AddAccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
