import { Component, Input } from '@angular/core';
import { ShortTransaction } from '../transaction.component';

@Component({
  selector: 'app-short-transaction',
  template: `<!--
    <table>
      <tr>
        <td>{{ transaction.id }}</td>
        <td>{{ transaction.amount }}</td>
        <td>{{ transaction.balance }}</td>
        <td>{{ transaction.label }}</td>
        <td>{{ transaction.date }}</td>
      </tr>
    </table>
--> `,
  styleUrl: './short-transaction.component.css',
})
export class ShortTransactionComponent {
  @Input() transaction!: ShortTransaction;
}
