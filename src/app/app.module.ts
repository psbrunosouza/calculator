import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorActionButtonComponent } from './calculator-action-button/calculator-action-button.component';
import { CalculatorDisplayComponent } from './calculator-display/calculator-display.component';
import {FormsModule} from "@angular/forms";
import {MinimalUiModule} from "@minimal-ui-design/angular/dist";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorActionButtonComponent,
    CalculatorDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MinimalUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
