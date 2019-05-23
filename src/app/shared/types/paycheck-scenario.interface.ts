import { VoluntaryDeductions } from './paycheck-scenario-request';
import { Content } from './paycheck-scenario-response';

export interface PaycheckScenario {
  scenarioName?: string,
  checkDate: number,
  state: string,
  grossPay: number,
  grossPayType: string,
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
  deductions: VoluntaryDeductions[],
  results?: Content,
}
