import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputhhmmssComponent } from "./inputhhmmss/inputhhmmss.component";
import { InputhhmmssModule } from "./inputhhmmss/inputhhmmss.module";
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    InputhhmmssModule
  ],
  exports: [
    InputhhmmssComponent
  ]
})
export class ShareComponentModule { }
