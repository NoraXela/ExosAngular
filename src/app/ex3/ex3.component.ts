import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs';
import { HttpClient, withFetch } from '@angular/common/http';
import { ShortTransaction } from './transaction.component';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrl: './ex3.component.css',
})
export class Ex3Component implements OnInit /* , OnDestroy*/ {
  myDate: Date = new Date();
  private $inActive = new Subject<boolean>();
  transactionArr: ShortTransaction[] = [];

  public transactions: any;
  public constructor(private http: HttpClient) {}
  public ngOnInit(): void {
    const url: string = '/assets/data/transactions.json';
    this.http.get(url).subscribe((response) => {
      this.transactions = response;
    });
    this.transactionArr = this.transactions;
  }

  headers = ['id', 'amount', 'balance', 'label', 'date'];

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
