import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { PaycheckScenarioCompareListComponent } from './paycheck-scenario-compare-list/paycheck-scenario-compare-list.component';
import { PaycheckScenarioComponent } from './paycheck-scenario/paycheck-scenario.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DeductionComponent } from './paycheck-scenario/deduction/deduction.component';
import { AdpApiServiceService } from './shared/adp-api-service.service';
import { PercentRoundPipe } from './shared/pipes/percent-round.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaycheckScenarioCompareListComponent,
    PaycheckScenarioComponent,
    HeaderComponent,
    HomeComponent,
    DeductionComponent,
    PercentRoundPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatInputModule
  ],
  providers: [AdpApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
