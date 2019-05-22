import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PaycheckScenarioResponse } from '../shared/types/paycheck-scenario-response';

@Injectable({
  providedIn: 'root'
})
export class AdpApiServiceService {
  baseUrl: string = 'https://calculators.symmetry.com/api/calculators/salary?report=none';
  apiKey: string = 'SDUvQ1Q5NFExcC9Qc2swUDVlL2lnZz09';

  constructor(private http: HttpClient) { }

  postSalaryData(data) {
    const headers = new HttpHeaders().set('pcc-api-key', this.apiKey);

    return this.http.post<PaycheckScenarioResponse>(this.baseUrl, data, { headers: headers }).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error : string) : Observable<boolean>{
    return;
  }
}
