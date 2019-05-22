import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PaycheckScenario } from '../shared/types/paycheck-scenario.interface';
import { AdpApiServiceService } from '../shared/adp-api-service.service';
import { PaycheckScenarioRequest, VoluntaryDeductions } from '../shared/types/paycheck-scenario-request';

@Component({
  selector: 'app-paycheck-scenario',
  templateUrl: './paycheck-scenario.component.html',
  styleUrls: ['./paycheck-scenario.component.scss']
})
export class PaycheckScenarioComponent implements OnInit {
  @Input('paycheckScenario')
  paycheckScenario: PaycheckScenario;

  deductions: {label: string, deductionType: string}[];

  constructor(private adpApiServiceService: AdpApiServiceService) { }

  ngOnInit() { }

  // BIG TODO: Add in other filing status
  getStateFilingStatus(filingStatus: string) {
    switch(filingStatus) {
      case 'SINGLE':
        return 'S';
      default:
        return 'S';
    }
  }

  onSubmit(form: NgForm) {
    const scenario = this.paycheckScenario;

    const body: PaycheckScenarioRequest = {
      checkDate: this.paycheckScenario.checkDate.getTime(),
      state: this.paycheckScenario.state,
      grossPay: String(this.paycheckScenario.grossPay),
      grossPayType: this.paycheckScenario.grossPayMethod,
      grossPayYTD: String(this.paycheckScenario.grossPayYTD),
      payFrequency: this.paycheckScenario.payFrequency,
      exemptFederal: String(this.paycheckScenario.exemptFederal),
      exemptFica: String(this.paycheckScenario.exemptFica),
      exemptMedicare: String(this.paycheckScenario.exemptMedicare),
      federalFilingStatusType: this.paycheckScenario.federalFilingStatus,
      federalAllowances: String(this.paycheckScenario.numberOfFederalAllowances),
      additionalFederalWithholding: String(this.paycheckScenario.additionalFederalWithholding),
      roundFederalWithholding: String(this.paycheckScenario.roundFederalWithholding),
      stateInfo: {
        parms: [
          {
            name: 'stateExemption',
            value: String(this.paycheckScenario.exemptState),
          },
          {
            name: 'FILINGSTATUS',
            value: this.getStateFilingStatus(this.paycheckScenario.stateFilingStatus),
          },
          {
            name: 'additionalStateWithholding',
            value: String(this.paycheckScenario.additionalStateWithholding),
          }
        ]
      },
      voluntaryDeductions: this.paycheckScenario.deductions,
      otherIncome: [],
      payCodes: [],
      presetDeductions: [],
      presetImputed: [],
      print: {
        "id": "",
        "employeeName": "",
        "employeeAddressLine1": "",
        "employeeAddressLine2": "",
        "employeeAddressLine3": "",
        "checkNumber": "",
        "checkNumberOnCheck": "false",
        "checkDate": new Date().getTime(),
        "remarks": "",
        "companyNameOnCheck": "false",
        "companyName": "",
        "companyAddressLine1": "",
        "companyAddressLine2": "",
        "companyAddressLine3": "",
        "emailReports": "false"
      },
      rates: [],
      stockOptions: [],
    };

    debugger;

    this.adpApiServiceService.postSalaryData(body).subscribe((data) => {
      debugger;
    });
  }
}
