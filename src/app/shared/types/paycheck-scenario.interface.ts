import { VoluntaryDeductions } from './paycheck-scenario-request';

export interface PaycheckScenario {
  scenarioName?: string,
  checkDate: Date,
  state: string,
  grossPay: number,
  grossPayMethod: string,
  grossPayYTD: number,
  payFrequency: string,
  exemptFederal: boolean,
  exemptFica: boolean,
  exemptMedicare: boolean,
  federalFilingStatus: string,
  numberOfFederalAllowances: number,
  additionalFederalWithholding: number,
  roundFederalWithholding: boolean,
  exemptState: boolean,
  stateFilingStatus: string,
  additionalStateWithholding: number,
  deductions: VoluntaryDeductions[]
}
