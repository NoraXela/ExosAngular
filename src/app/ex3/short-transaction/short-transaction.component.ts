import { Component, Input } from '@angular/core';
import { ShortTransaction } from '../transaction.component';

@Component({
  selector: 'app-short-transaction',
  template: ``,
  styleUrl: './short-transaction.component.css',
})
export class ShortTransactionComponent {
  @Input() transaction!: ShortTransaction;
}
