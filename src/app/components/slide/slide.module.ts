import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide.component';
import { GalleryModule} from 'ng-gallery';


@NgModule({
  declarations: [
    SlideComponent
  ],
  imports: [
    CommonModule,
    GalleryModule,
  ],
  exports: [
    SlideComponent
  ]
})
export class SlideModule { }
