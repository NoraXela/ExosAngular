import { Component } from '@angular/core';
import { Ex3Component } from '../ex3.component';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.css',
})
export class TransactionDetailComponent {
  myDate: Date = new Date();
}
