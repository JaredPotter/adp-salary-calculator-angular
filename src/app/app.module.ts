import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaycheckScenarioCompareListComponent } from './paycheck-scenario-compare-list/paycheck-scenario-compare-list.component';
import { PaycheckScenarioComponent } from './paycheck-scenario/paycheck-scenario.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DeductionComponent } from './paycheck-scenario/deduction/deduction.component';
import { AdpApiServiceService } from './shared/adp-api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PaycheckScenarioCompareListComponent,
    PaycheckScenarioComponent,
    HeaderComponent,
    HomeComponent,
    DeductionComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [AdpApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
