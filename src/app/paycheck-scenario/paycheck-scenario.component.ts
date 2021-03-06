import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PaycheckScenario } from '../shared/types/paycheck-scenario.interface';
import { AdpApiServiceService } from '../shared/adp-api-service.service';
import { PaycheckScenarioRequest, VoluntaryDeductions } from '../shared/types/paycheck-scenario-request';
import { PaycheckScenarioResponse } from '../shared/types/paycheck-scenario-response';
import { ApiServiceService } from '../shared/api-service.service';

@Component({
  selector: 'app-paycheck-scenario',
  templateUrl: './paycheck-scenario.component.html',
  styleUrls: ['./paycheck-scenario.component.scss']
})
export class PaycheckScenarioComponent implements OnInit {
  @Input('paycheckScenario')
  paycheckScenario: PaycheckScenario;

  deductions: {label: string, deductionType: string}[];

  constructor(private adpApiServiceService: AdpApiServiceService, private apiServiceService: ApiServiceService) { }

  ngOnInit() {
    // Copy over parameters.
  }

  getStateFilingStatus(filingStatus: string) {
    switch(filingStatus) {
      case 'SINGLE':
        return 'S';
      case 'MARRIED':
        return 'M';
      case 'MARRIED_USE_SINGLE_RATE':
        return 'MH';
      default:
        return 'S';
    }
  }

  getPayFrequencyWeeks(payFrequency: string) {
    switch(payFrequency) {
      case 'DAILY':
        return 365;
      case 'WEEKLY':
        return 52;
      case 'BI_WEEKLY':
        return 26;
      case 'SEMI_MONTHLY':
        return 24;
      case 'MONTHLY':
        return 12;
      default:
        return 0;
    }
  }

  getTotalTaxes() {
    let sum = 0;
    sum += this.paycheckScenario.results.federal;
    sum += this.paycheckScenario.results.state;
    sum += this.paycheckScenario.results.medicare;
    sum += this.paycheckScenario.results.fica;

    return sum;
  }

  onSubmit(form: NgForm) {
    const body: PaycheckScenarioRequest = {
      checkDate: this.paycheckScenario.checkDate,
      state: this.paycheckScenario.state,
      grossPay: String(this.paycheckScenario.grossPay),
      grossPayType: this.paycheckScenario.grossPayType,
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
        id: '',
        employeeName: '',
        employeeAddressLine1: '',
        employeeAddressLine2: '',
        employeeAddressLine3: '',
        checkNumber: '',
        checkNumberOnCheck: 'false',
        checkDate: new Date().getTime(),
        remarks: '',
        companyNameOnCheck: 'false',
        companyName: '',
        companyAddressLine1: '',
        companyAddressLine2: '',
        companyAddressLine3: '',
        emailReports: 'false',
      },
      rates: [],
      stockOptions: [],
    };

    if(this.paycheckScenario.imputedIncome) {
      // Calculate imputed income.
      const imputedIncome = this.paycheckScenario.imputedIncome;
      const payFrequency = this.paycheckScenario.payFrequency;
      let annualImputedIncome = 0;
      annualImputedIncome = imputedIncome * this.getPayFrequencyWeeks(payFrequency);
      const grossPay = Number(body.grossPay);
      const newGrossPay = grossPay + annualImputedIncome;
      body.grossPay = String(newGrossPay);
    }

    // Calculate correct 401K amount.
    let deduction401k = this.paycheckScenario.deductions.find((deduction) => {
      if(deduction.benefitType === '401k' && deduction.deductionMethodType === 'PERCENT_OF_GROSS') {
        return true
      }
    });

    deduction401k = Object.assign({}, deduction401k);

    if(deduction401k) {
      const weeks = this.getPayFrequencyWeeks(this.paycheckScenario.payFrequency);
      const grossCheck = this.paycheckScenario.grossPay / weeks;
      const amount = (grossCheck * (Number(deduction401k.deductionAmount) / 100)).toFixed(2);
      deduction401k.deductionMethodType = 'FIXED_AMOUNT';
      deduction401k.deductionAmount = amount;
    }

    this.adpApiServiceService.postSalaryData(body).subscribe((data) => {
      let results = (<PaycheckScenarioResponse>data).content;

      // Subtract imputed income.
      results.netPay -= this.paycheckScenario.imputedIncome;

      // Add credits.
      let creditsSum = 0;

      if(this.paycheckScenario.credits && this.paycheckScenario.credits.length > 0) {
        this.paycheckScenario.credits.forEach((credit) => {
          creditsSum += credit.creditAmount;
        });
      }

      results.netPay += creditsSum;

      this.paycheckScenario.results = results;
      this.paycheckScenario.results = (<PaycheckScenarioResponse>data).content;

      // Update Existing.
      if(this.paycheckScenario.id) {
        this.apiServiceService.updateScenarioData(this.paycheckScenario)
        .subscribe((response) => {
          // do nothing.
        });
      }
      else {
        // Create New.
        this.apiServiceService.postScenarioData(this.paycheckScenario)
        .subscribe((response: { name: string}) => {
          this.paycheckScenario.id = response.name;
        });
      }
    });
  }
}
