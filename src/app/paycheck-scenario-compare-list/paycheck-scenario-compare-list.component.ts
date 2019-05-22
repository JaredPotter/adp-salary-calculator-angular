import { Component, OnInit } from '@angular/core';

import { PaycheckScenario } from '../shared/types/paycheck-scenario.interface';
import { AdpApiServiceService } from '../shared/adp-api-service.service';

@Component({
  selector: 'app-paycheck-scenario-compare-list',
  templateUrl: './paycheck-scenario-compare-list.component.html',
  styleUrls: ['./paycheck-scenario-compare-list.component.scss']
})
export class PaycheckScenarioCompareListComponent implements OnInit {
  paycheckScenarios: PaycheckScenario[];

  constructor(private AdpApiServiceService: AdpApiServiceService) { }

  ngOnInit() {
    this.paycheckScenarios = [
      {
        scenarioName: 'Navitaire 1',
        checkDate: new Date(),
        state: 'UT',
        grossPay: 0,
        grossPayMethod: 'ANNUALLY',
        grossPayYTD: 0,
        payFrequency: 'SEMI_MONTHLY',
        exemptFederal: false,
        exemptFica: false,
        exemptMedicare: false,
        federalFilingStatus: 'SINGLE',
        numberOfFederalAllowances: 1,
        additionalFederalWithholding: 0,
        roundFederalWithholding: false,
        exemptState: false,
        stateFilingStatus: 'SINGLE',
        additionalStateWithholding: 0,
        deductions: [
          {
            deductionName: '401K',
            deductionAmount: String(38),
            deductionMethodType: 'PERCENT_OF_GROSS',
            benefitType: '401k'
          },
          {
            deductionName: 'Health Savings Account - HSA',
            deductionAmount: String(250),
            deductionMethodType: 'FIXED_AMOUNT',
            benefitType: 'hsa'
          },
        ],
      },
    ];
  }
}
