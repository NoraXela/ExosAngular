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
  // For datetime
  myDate: Date = new Date();
  private $inActive = new Subject<boolean>();

  //For message received from Ex3 page
  message: string = '';

  //Transaction URL to get ID from Ex3 via message
  transactionUrl: string = '';
  transactionID: string = '';

  public transactionString: any;
  public transaction: any;

  public constructor(private http: HttpClient, private data: SendIdService) {}

  public ngOnInit(): void {
    // Get Datetime
    this.startClock();

    // Get transaction ID via message + URL creation
    this.data.currentMessage.subscribe((message) => (this.message = message));
    this.transactionID = this.message.slice(1, -1);
    const transactionUrl: string =
      '/assets/data/' + this.transactionID + '.json';

    //Get transaction by ID via http
    this.http.get(transactionUrl).subscribe((response) => {
      this.transactionString = JSON.stringify(response);
      this.transaction = JSON.parse(this.transactionString);
    });
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
