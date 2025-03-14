import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from "./components/layout-components/header/header.module";
import { SupportCenterModule } from './components/layout-components/support-center/support-center.module';
import { AComponentTestModule } from './components/layout-components/a-component-test/a-component-test.module';
import { CountdownDoughnutModule } from './shared/components/countdown-doughnut/countdown-doughnut.module';
import { CountdownTimerModule } from './shared/components/countdown-timer/countdown-timer.module';
import { SplitterTimerModule } from './shared/components/splitter-timer/splitter-timer.module';
import { SharedDirectivesModule } from './shared/directives/shared-directives.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareComponentModule } from './shared/components/share-component.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    SupportCenterModule,
    AComponentTestModule,
    CountdownDoughnutModule,
    CountdownTimerModule,
    SplitterTimerModule,
    SharedDirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    ShareComponentModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
