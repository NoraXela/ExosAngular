import { Component, Inject, Injectable, Input } from '@angular/core';
import { Operation, FinalOperation } from '../operation.component';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrl: './ex2.component.css',
})
@Injectable()
export class Ex2Component {
  no1: string = '';
  no2: string = '';
  selectedOperation: string = '';
  result: number = 0;

  operation: Operation | undefined;

  operationList: FinalOperation[] = [];

  calculate(val: Operation) {
    switch (val.selectedOperation) {
      case '+':
        this.result = val.no1 + val.no2;
        break;
      case '-':
        this.result = val.no1 - val.no2;
        break;
      case '*':
        this.result = val.no1 * val.no2;
        break;
      case '/':
        this.result = val.no1 / val.no2;
        break;
      default:
        break;
    }

    // Output operation configuration
    var outputOperation = {
      date: new Date(),
      no1: 0,
      selectedOperation: '',
      no2: 0,
      result: 0,
    };

    outputOperation!.date = new Date();
    outputOperation!.no1 = val.no1;
    outputOperation!.selectedOperation = val.selectedOperation;
    outputOperation!.no2 = val.no2;
    outputOperation!.result = this.result;

    //Add operation to list of operations
    this.operationList = this.operationList.concat(outputOperation);
  }
}
