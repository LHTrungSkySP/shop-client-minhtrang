import { CommonModule, DecimalPipe } from "@angular/common";
import { CurrencyFormatPipe } from "./currency-format.pipe";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    CurrencyFormatPipe,
   ],
  imports: [
    CommonModule,
  ],
  exports: [
    CurrencyFormatPipe,
  ],
  providers: [DecimalPipe]
})
export class PipeModule {
}
