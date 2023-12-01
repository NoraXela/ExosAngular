import { formatDate } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
  OnChanges,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Subject, interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs';
import { HttpClient, withFetch } from '@angular/common/http';
import { ShortTransaction, LongTransaction } from './transaction.component';
import { SendIdService } from '../send-id.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrl: './ex3.component.css',
})
export class Ex3Component implements OnInit, AfterViewInit /* , OnDestroy*/ {
  //* TABLE stuff
  displayedColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];

  // END TABLE STUFF

  myDate: Date = new Date();
  private $inActive = new Subject<boolean>();
  transactionArr: ShortTransaction[] = [];
  transactionString: string = '';
  message: string = '';

  dataSource: any;
  public transactions: any;
  public transaction: any;

  public constructor(private http: HttpClient, private data: SendIdService) {}

  @ViewChild(MatSort) sort!: MatSort;

  public ngOnInit() {
    this.startClock();
    this.data.currentMessage.subscribe((message) => (this.message = message));

    const url: string = '/assets/data/transactions.json';
    console.log('First url: ' + url);
    this.http.get<ShortTransaction[]>(url).subscribe((response) => {
      console.log(response[0]);
      this.transactionString = JSON.stringify(response);
      console.log('response ' + response);
      console.log('transactionString ' + this.transactionString);
      this.transactionArr = response;
      console.log('transactionArr ' + this.transactionArr);
      //this.transactionString = '{' + this.transactionString + '}';
      // console.log('transactionString ' + this.transactionString);
      // this.transactionArr = JSON.parse(this.transactionString);
      this.dataSource = new MatTableDataSource(
        JSON.parse(this.transactionString)
      );
      this.dataSource.sort = this.sort;
      // this.transactions = response;
      // console.log(typeof this.transactions);
      // console.log(typeof this.transactionArr);
    });

    // const dataSource = new MatTableDataSource(this.transactionArr);
    //this.transactionString = JSON.stringify(this.transactions);
    console.log('transactionStringx ' + this.transactionString);
    // this.transactionArr = JSON.parse(this.transactionString);
    //* TABLE stuff
    // const dataSource = new MatTableDataSource(this.transactionArr);
    //* END TABLE stuff
  }

  public ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
  //FOR LATER!!!!!  */
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
