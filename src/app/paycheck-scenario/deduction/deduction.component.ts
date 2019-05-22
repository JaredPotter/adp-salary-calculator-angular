import { Component, OnInit, Input } from '@angular/core';
import { Deduction } from '../../shared/types/deduction';

@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
  styleUrls: ['./deduction.component.scss']
})
export class DeductionComponent implements OnInit {
  @Input('label')
  label: string = '<default label>';

  @Input('deduction')
  deduction: Deduction;

  constructor() { }

  ngOnInit() {
  }

  is401K() {
    if(this.deduction.type === '401k'){
      return true;
    }

    return false;
  }

  isHsa() {
    if(this.deduction.type === 'hsa'){
      return true;
    }

    return false;
  }

  isTraditionalIra() {
    if(this.deduction.type === 'traditionalIra'){
      return true;
    }

    return false;
  }
}
