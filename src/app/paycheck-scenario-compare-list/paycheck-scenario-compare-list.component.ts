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
        scenarioName: 'Scenario 1',
        checkDate: new Date().getTime(),
        state: 'UT',
        grossPay: 100000,
        grossPayType: 'ANNUALLY',
        grossPayYTD: 0,
        payFrequency: 'SEMI_MONTHLY',
        exemptFederal: false,
        exemptFica: false,
        exemptMedicare: false,
        federalFilingStatus: 'SINGLE',
        numberOfFederalAllowances: 2,
        additionalFederalWithholding: 0,
        roundFederalWithholding: false,
        exemptState: false,
        stateFilingStatus: 'SINGLE',
        additionalStateWithholding: 0,
        imputedIncome: (270.13 + 9.04),
        // imputedIncome: 9.04,
        // imputedIncome: 270.13,
        // imputedIncome: 0,
        credits: [
          {
            creditName: 'Medical - Wellness Credit',
            creditAmount: 25.00,
          }
        ],
        deductions: [
          {
            deductionName: '401K',
            deductionAmount: String(1583.33),
            deductionMethodType: 'FIXED_AMOUNT',
            // deductionAmount: String(38),
            // deductionMethodType: 'PERCENT_OF_GROSS',
            benefitType: '401k'
          },
          {
            deductionName: 'Health Savings Account - HSA',
            deductionAmount: String(500),
            deductionMethodType: 'FIXED_AMOUNT',
            benefitType: 'hsa'
          },
          {
            deductionName: 'Dental - Self',
            deductionAmount: String(7.50),
            deductionMethodType: 'FIXED_AMOUNT',
            benefitType: '_Custom',
            exemptFederal: 'true',
          },
          // {
          //   deductionName: 'Dental - Spouse',
          //   deductionAmount: String(7.50),
          //   deductionMethodType: 'FIXED_AMOUNT',
          //   benefitType: '_Custom'
          // },
          {
            deductionName: 'Medical - Self',
            deductionAmount: String(45.00),
            deductionMethodType: 'FIXED_AMOUNT',
            benefitType: '_Custom',
            exemptFederal: 'true',
          },
          // {
          //   deductionName: 'Medical - Spouse',
          //   deductionAmount: String(46.50),
          //   deductionMethodType: 'FIXED_AMOUNT',
          //   benefitType: '_Custom'
          // },
          {
            deductionName: 'Vision',
            deductionAmount: String(7.93),
            deductionMethodType: 'FIXED_AMOUNT',
            benefitType: '_Custom',
            exemptFederal: 'true',
          },
        ],
      },
      // {
      //   scenarioName: 'Scenario 2',
      //   checkDate: new Date().getTime(),
      //   state: 'UT',
      //   grossPay: 100000,
      //   grossPayType: 'ANNUALLY',
      //   grossPayYTD: 0,
      //   payFrequency: 'SEMI_MONTHLY',
      //   exemptFederal: false,
      //   exemptFica: false,
      //   exemptMedicare: false,
      //   federalFilingStatus: 'SINGLE',
      //   numberOfFederalAllowances: 1,
      //   additionalFederalWithholding: 0,
      //   roundFederalWithholding: false,
      //   exemptState: false,
      //   stateFilingStatus: 'SINGLE',
      //   additionalStateWithholding: 0,
      //   deductions: [
      //     {
      //       deductionName: '401K',
      //       deductionAmount: String(38),
      //       deductionMethodType: 'PERCENT_OF_GROSS',
      //       benefitType: '401k'
      //     },
      //     {
      //       deductionName: 'Health Savings Account - HSA',
      //       deductionAmount: String(250),
      //       deductionMethodType: 'FIXED_AMOUNT',
      //       benefitType: 'hsa'
      //     },
      //   ],
      // },
    ];
  }
}
