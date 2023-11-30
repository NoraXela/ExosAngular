import { Component, Input } from '@angular/core';
import { Operation, FinalOperation } from '../../operation.component';
import { Ex2Component } from '../ex2.component';

@Component({
  selector: 'app-operation-history',
  template: `
    <p>
      <strong>Time: </strong>{{ operation.date }} <strong>Operation: </strong
      >{{ operation.no1 }}
      {{ operation.selectedOperation }}
      {{ operation.no2 }} <strong> = </strong> {{ operation.result }}
      <button (click)="this.clearThisOperation(operation, operationList)">
        Clear from history
      </button>
    </p>
  `,
  styleUrl: './operation-history.component.css',
})
export class OperationHistoryComponent {
  @Input() operation!: FinalOperation;
  @Input() operationList!: FinalOperation[];

  //constructor(private ex2Component: Ex2Component) {}

  clearThisOperation(
    operation: FinalOperation,
    operationList: FinalOperation[]
  ) {
    const index = operationList.indexOf(operation);
    if (index !== -1) {
      operationList.splice(index, 1);
      // const index = this.ex2Component.operationList.indexOf(operation);
      // if (index !== -1) {
      //   this.ex2Component.operationList.splice(index, 1);
    }
  }
}
