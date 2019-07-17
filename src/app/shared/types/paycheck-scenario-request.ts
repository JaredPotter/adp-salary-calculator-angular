export interface PaycheckScenarioRequest {
  checkDate: number,
  state: string,
  grossPay: string,
  grossPayType: string,
  grossPayYTD: string,
  payFrequency: string,
  exemptFederal: string,
  exemptFica: string,
  exemptMedicare: string,
  federalFilingStatusType: string,
  federalAllowances: string,
  additionalFederalWithholding: string,
  roundFederalWithholding: string,
  voluntaryDeductions: VoluntaryDeductions[],
  print: Print,
  otherIncome: any[],
  rates: any[],
  payCodes: any[],
  stockOptions: any[],
  stateInfo: StateInfo,
  presetDeductions: any[],
  presetImputed: any[],
}

export interface VoluntaryDeductions {
  benefitType: string,
  deductionName: string,
  deductionAmount: string,
  deductionMethodType: string,
  ytdAmount?: string,
  exemptFederal?: string,
  exemptFica?: string,
  exemptLocal?: string,
  exemptState?: string
}

interface Print {
  id: string,
  employeeName: string,
  employeeAddressLine1: string,
  employeeAddressLine2: string,
  employeeAddressLine3: string,
  checkNumber: string,
  checkNumberOnCheck: string,
  checkDate: number,
  remarks: string,
  companyNameOnCheck: string,
  companyName: string,
  companyAddressLine1: string,
  companyAddressLine2: string,
  companyAddressLine3: string,
  emailReports: string,
}

interface StateInfo {
  parms: Parms[]
}

interface Parms {
  name: string,
  value: string
}
// Example
// {
//   "checkDate": 1558418400000,
//   "state": "UT",
//   "grossPay": "100000",
//   "grossPayType": "ANNUALLY",
//   "grossPayYTD": "0",
//   "payFrequency": "SEMI_MONTHLY",
//   "exemptFederal": "false",
//   "exemptFica": "false",
//   "exemptMedicare": "false",
//   "federalFilingStatusType": "SINGLE",
//   "federalAllowances": "1",
//   "additionalFederalWithholding": "0",
//   "roundFederalWithholding": "false",
//   "voluntaryDeductions": [
//       {
//           "benefitType": "401k",
//           "deductionName": "401k",
//           "deductionAmount": "38",
//           "deductionMethodType": "PERCENT_OF_GROSS",
//           "ytdAmount": "0"
//       },
//       {
//           "benefitType": "hsa",
//           "deductionName": "HSA",
//           "deductionAmount": "250",
//           "deductionMethodType": "FIXED_AMOUNT"
//       }
//   ],
//   "print": {
//       "id": "",
//       "employeeName": "",
//       "employeeAddressLine1": "",
//       "employeeAddressLine2": "",
//       "employeeAddressLine3": "",
//       "checkNumber": "",
//       "checkNumberOnCheck": "false",
//       "checkDate": 1558418400000,
//       "remarks": "",
//       "companyNameOnCheck": "false",
//       "companyName": "",
//       "companyAddressLine1": "",
//       "companyAddressLine2": "",
//       "companyAddressLine3": "",
//       "emailReports": "false"
//   },
//   "otherIncome": [],
//   "rates": [],
//   "payCodes": [],
//   "stockOptions": [],
//   "stateInfo": {
//       "parms": [
//           {
//               "name": "stateExemption",
//               "value": "false"
//           },
//           {
//               "name": "FILINGSTATUS",
//               "value": "S"
//           },
//           {
//               "name": "additionalStateWithholding",
//               "value": "0"
//           }
//       ]
//   },
//   "presetDeductions": [],
//   "presetImputed": []
// }
