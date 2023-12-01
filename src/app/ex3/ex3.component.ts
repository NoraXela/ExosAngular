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
export class Ex3Component implements OnInit, AfterViewInit {
  // table columns
  displayedColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];
  dataSource: any;

  //variables for datetime
  myDate: Date = new Date();
  private $inActive = new Subject<boolean>();

  //transactions
  public transactions: any;
  public transaction: any;
  transactionString: string = '';

  // message sent to transactionDetail
  message: string = '';

  public constructor(private http: HttpClient, private data: SendIdService) {}

  // for sorting columns
  @ViewChild(MatSort) sort!: MatSort;

  public ngOnInit() {
    // Datetime
    this.startClock();

    // Initial message
    this.data.currentMessage.subscribe((message) => (this.message = message));

    // Get transaction Data from JSON and load to table + sort paramétrage
    const url: string = '/assets/data/transactions.json';
    this.http.get<ShortTransaction[]>(url).subscribe((response) => {
      this.transactionString = JSON.stringify(response);
      this.dataSource = new MatTableDataSource(
        JSON.parse(this.transactionString)
      );
      this.dataSource.sort = this.sort;
    });
  }

  public ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.$inActive.next(true);
    this.$inActive.unsubscribe();
  }

  // Transmission of transaction ID
  newMessage(transmittedTransactionID: string) {
    this.data.changeMessage(JSON.stringify(transmittedTransactionID));
  }

  startClock(): void {
    interval(1)
      .pipe(takeUntil(this.$inActive))
      .subscribe((data) => {
        this.myDate = new Date();
      });
  }
}
