import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PaycheckScenario } from './types/paycheck-scenario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl: string = 'https://adp-salary-calculator-angular.firebaseio.com/data/scenarios';

  constructor(private httpClient: HttpClient) { }

  postScenarioData(data: PaycheckScenario) {
    return this.httpClient.post(this.baseUrl + `.json`, data);
  }

  updateScenarioData(data: PaycheckScenario) {
    return this.httpClient.put(this.baseUrl  + `/${data.id}.json`, data);
  }

  getScenarioData(): Observable<Object> {
    return this.httpClient.get(this.baseUrl + `.json`);
  }
}
