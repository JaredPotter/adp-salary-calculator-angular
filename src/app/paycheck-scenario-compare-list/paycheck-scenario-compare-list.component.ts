import { Component, OnInit } from '@angular/core';

import { PaycheckScenario } from '../shared/types/paycheck-scenario.interface';
import { ApiServiceService } from '../shared/api-service.service';

@Component({
  selector: 'app-paycheck-scenario-compare-list',
  templateUrl: './paycheck-scenario-compare-list.component.html',
  styleUrls: ['./paycheck-scenario-compare-list.component.scss']
})
export class PaycheckScenarioCompareListComponent implements OnInit {
  paycheckScenarios: PaycheckScenario[] = [];

  constructor(private apiServicService: ApiServiceService) { }

  ngOnInit() {
    this.apiServicService.getScenarioData()
    .subscribe((response) => {
      for(let key in response) {
        const scenario = <PaycheckScenario>response[key];
        scenario.id = key;

        this.paycheckScenarios.push(scenario);
      }
    });
    // this.paycheckScenarios = [
    //   {
    //     // id: "id_1",
    //     scenarioName: 'Navitaire 1',
    //     checkDate: new Date().getTime(),
    //     state: 'UT',
    //     grossPay: 100000,
    //     grossPayType: 'ANNUALLY',
    //     grossPayYTD: 0,
    //     payFrequency: 'SEMI_MONTHLY',
    //     exemptFederal: false,
    //     exemptFica: false,
    //     exemptMedicare: false,
    //     federalFilingStatus: 'SINGLE',
    //     numberOfFederalAllowances: 1,
    //     additionalFederalWithholding: 0,
    //     roundFederalWithholding: false,
    //     exemptState: false,
    //     stateFilingStatus: 'SINGLE',
    //     additionalStateWithholding: 0,
    //     deductions: [
    //       {
    //         deductionName: '401K',
    //         deductionAmount: String(38),
    //         deductionMethodType: 'PERCENT_OF_GROSS',
    //         benefitType: '401k'
    //       },
    //       {
    //         deductionName: 'HSA',
    //         deductionAmount: String(250),
    //         deductionMethodType: 'FIXED_AMOUNT',
    //         benefitType: 'hsa'
    //       },
    //     ],
    //   },
    //   {
    //     // id: "id_1",
    //     scenarioName: 'Navitaire 2',
    //     checkDate: new Date().getTime(),
    //     state: 'UT',
    //     grossPay: 100000,
    //     grossPayType: 'ANNUALLY',
    //     grossPayYTD: 0,
    //     payFrequency: 'SEMI_MONTHLY',
    //     exemptFederal: false,
    //     exemptFica: false,
    //     exemptMedicare: false,
    //     federalFilingStatus: 'SINGLE',
    //     numberOfFederalAllowances: 1,
    //     additionalFederalWithholding: 0,
    //     roundFederalWithholding: false,
    //     exemptState: false,
    //     stateFilingStatus: 'SINGLE',
    //     additionalStateWithholding: 0,
    //     deductions: [
    //       {
    //         deductionName: '401K',
    //         deductionAmount: String(38),
    //         deductionMethodType: 'PERCENT_OF_GROSS',
    //         benefitType: '401k'
    //       },
    //       {
    //         deductionName: 'Health Savings Account - HSA',
    //         deductionAmount: String(250),
    //         deductionMethodType: 'FIXED_AMOUNT',
    //         benefitType: 'hsa'
    //       },
    //     ],
    //   },
    // ];
  }

  onAddNewScenario() {
    const scenario: PaycheckScenario = {
      scenarioName: '',
      checkDate: 1,
      state: 'UT',
      grossPay: 0,
      grossPayType: 'ANNUALLY',
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
      deductions: [],
    };

    this.paycheckScenarios.push(scenario);
  }
}
