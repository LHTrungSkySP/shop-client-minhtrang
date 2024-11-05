import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from "@angular/common";

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  defaultLocale = 'vi-VN';
  constructor(
    private _decimalPipe: DecimalPipe,
  ) {
    this.toLocale();
  }
  transform(value: number): any {
    return this._decimalPipe.transform(value, '1.0-0', 'en-US');
  }

  getMoneyStr(value: number, decimalDigit: number = 0) {
    if (value == 0) {
      return value;
    }
    const valueABS = Math.abs(value);

    const pow = Math.pow(10, decimalDigit);
    const val = Math.ceil(valueABS * pow) / pow;
    const s: string = val.toString();
    let s2 = '';
    let j = s.indexOf('.');
    if (j > -1) {
      s2 = s.substring(j);
    } else {
      j = s.length;
    }

    while (j > 3) {
      s2 = '.' + s.substring(j - 3, j) + s2;
      j -= 3;
    }
    s2 = s.substring(0, j) + s2;
    if (value < 0) {
      s2 = '- ' + s2;
    }
    return s2;
  }
  toLocale(){
    this.defaultLocale = '' + navigator.language;
    // console.log(navigator.language);
    switch (this.defaultLocale) {
      case 'vi':
        this.defaultLocale = 'vi-VN';
        break;
      case 'en':
        this.defaultLocale = 'en-US';
        break;
    }
    // console.log('locale', navigator.language, this.defaultLocale);
  }
}
