import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide.component';


@NgModule({
  declarations: [
    SlideComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SlideComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class SlideModule { }
