import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from './highcharts.service.ts';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ChartModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers: [HighchartsService]
})
export class AppModule { }
