import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    AutoCompleteModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    RadioButtonModule,
    CalendarModule,
    InputTextareaModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    AutoCompleteModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    RadioButtonModule,
    CalendarModule,
    InputTextareaModule
  ]
})
export class CommonFormModule { }
