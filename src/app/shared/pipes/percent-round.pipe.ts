import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentRound'
})
export class PercentRoundPipe implements PipeTransform {

  transform(value: number): string {
    return value.toFixed(2);
  }
}
