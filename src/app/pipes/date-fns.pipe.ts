import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns'
import { DateMode } from './types'

@Pipe({
  name: 'dateFns'
})
export class DateFnsPipe implements PipeTransform {

  transform(date: number, mode: string): string {
    let formatMode =  DateMode[mode];
    if (!formatMode) {
      formatMode = mode;
    }
    return format(date, formatMode)
  }

}
