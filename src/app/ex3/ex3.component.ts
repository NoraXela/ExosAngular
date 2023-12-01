import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs';
import { HttpClient, withFetch } from '@angular/common/http';
import { ShortTransaction, LongTransaction } from './transaction.component';
import { SendIdService } from '../send-id.service';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrl: './ex3.component.css',
})
export class Ex3Component implements OnInit /* , OnDestroy*/ {
  myDate: Date = new Date();
  //private $inActive = new Subject<boolean>();
  transactionArr: ShortTransaction[] = [];
  message: string = '';

  public transactions: any;
  public transaction: any;
  public constructor(private http: HttpClient, private data: SendIdService) {}
  public ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));

    const url: string = '/assets/data/transactions.json';
    console.log('First url: ' + url);
    this.http.get(url).subscribe((response) => {
      this.transactions = response;
      console.log(this.transactions);
    });
    this.transactionArr = this.transactions;
  }

  newMessage(transmittedTransactionID: string) {
    // incercare smecherire!!!
    this.data.changeMessage(JSON.stringify(transmittedTransactionID));
    // console.log('NEW MESSAGE');
    // const url: string = '/assets/data/' + transmittedTransactionID + '.json';
    // console.log('Special url: ' + url);
    // this.http.get(url).subscribe((response) => {
    //   this.transaction = response;
    //   console.log(this.transaction);
    //   this.data.changeMessage(JSON.stringify(this.transaction));
    // });
    //const indivTransaction: LongTransaction = this.transactions;
    // sfarsit incercare!!!
  }

  //headers = ['id', 'amount', 'balance', 'label', 'date'];

  /* FOR LATER VERSION 1 TIME
  ngOnInit() {
    timer(0, 1000).subscribe(() => {
      this.myDate = new Date();
    });
  }
  // FOR LATER VERSION 1 TIME */

  /* FOR LATER FOR LATER VERSION 2 TIME !!!!
  ngOnInit() {
    this.startClock();
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
  //FOR LATER!!!!!  */
}
