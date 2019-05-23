import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentRound'
})
export class PercentRoundPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value);
  }

}
