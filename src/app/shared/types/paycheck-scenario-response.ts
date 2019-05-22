export interface PaycheckScenarioResponse {
  content: Content
}

interface Content {
  federal: number,
  medicare: number,
  fica: number,
  eic: number,
  state: number,
  netPay: number,
  grossPay: number,
  voluntaryDeductions: VoluntaryDeductions[],
  stateTaxTypes: any[]
  localeTaxes: any[]
  timeStamp: number
}

interface VoluntaryDeductions {
  name: string,
  value: string
}

// Example
// {
//   "content": {
//       "federal": 267.44,
//       "medicare": 56.79,
//       "fica": 242.83,
//       "eic": 0,
//       "state": 115.5,
//       "netPay": 1650.78,
//       "grossPay": 4166.67,
//       "voluntaryDeductions": [
//           {
//               "name": "HSA",
//               "value": "250.00"
//           },
//           {
//               "name": "401k",
//               "value": "1583.33"
//           }
//       ],
//       "stateTaxTypes": [],
//       "localeTaxes": [],
//       "timeStamp": 1558553169628
//   },
//   "_links": {
//       "self": {
//           "href": "https://calculators.symmetry.com/api/calculators/salary?report=none&showcalc=false&itd=false"
//       }
//   }
// }
