import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycheckScenarioCompareListComponent } from './paycheck-scenario-compare-list.component';

describe('PaycheckScenarioCompareListComponent', () => {
  let component: PaycheckScenarioCompareListComponent;
  let fixture: ComponentFixture<PaycheckScenarioCompareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaycheckScenarioCompareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaycheckScenarioCompareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
