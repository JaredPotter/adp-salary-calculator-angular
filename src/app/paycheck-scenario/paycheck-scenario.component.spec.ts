import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycheckScenarioComponent } from './paycheck-scenario.component';

describe('PaycheckScenarioComponent', () => {
  let component: PaycheckScenarioComponent;
  let fixture: ComponentFixture<PaycheckScenarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaycheckScenarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaycheckScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
