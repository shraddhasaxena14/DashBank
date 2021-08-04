import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFundTransferComponent } from './user-fund-transfer.component';

describe('UserFundTransferComponent', () => {
  let component: UserFundTransferComponent;
  let fixture: ComponentFixture<UserFundTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFundTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
