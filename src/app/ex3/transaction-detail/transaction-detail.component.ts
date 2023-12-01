import { Component, OnInit } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';
import { Ex3Component } from '../ex3.component';
import { SendIdService } from '../../send-id.service';
import { HttpClient, withFetch } from '@angular/common/http';
import { LongTransaction } from '../transaction.component';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.css',
})
export class TransactionDetailComponent implements OnInit {
  myDate: Date = new Date();
  private $inActive = new Subject<boolean>();
  message: string = '';
  transactionUrl: string = '';
  // transaction: string = '';
  transactionID: string = '';

  public transactionString: any;
  public transaction: any;
  //   id: '',
  //   amount: 0,
  //   balance: 0,
  //   label: '',
  //   description: '',
  //   date: '',
  // };

  public constructor(private http: HttpClient, private data: SendIdService) {}

  public ngOnInit(): void {
    this.startClock();
    console.log('ROUTER LINK');
    this.data.currentMessage.subscribe((message) => (this.message = message));
    //this.transactionUrl = '../../../assets/data/' + this.message + '.json';
    this.transactionID = this.message.slice(1, -1);
    const transactionUrl: string =
      '/assets/data/' + this.transactionID + '.json';
    console.log('transactionUrl ' + transactionUrl);
    this.http.get(transactionUrl).subscribe((response) => {
      console.log('typeof response ' + typeof response);
      this.transactionString = JSON.stringify(response);
      console.log('TransactionString ' + this.transactionString);
      this.transaction = JSON.parse(this.transactionString);
    });

    // console.log('Message ' + this.message);
    // this.transaction = JSON.parse(this.message);
    // console.log('Transaction ' + this.transaction);
    // const url: string = '/assets/data/transactions.json';
    // console.log('First url: ' + url);
    // this.http.get(url).subscribe((response) => {
    //   this.transactions = response;
    // });
    // console.log(this.transactions);
  }

  ngOnDestroy(): void {
    this.$inActive.next(true);
    this.$inActive.unsubscribe();
  }

  startClock(): void {
    interval(1)
      .pipe(takeUntil(this.$inActive))
      .subscribe((data) => {
        this.myDate = new Date();
      });
  }
}
