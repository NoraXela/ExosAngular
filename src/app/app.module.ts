import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex1Component } from './ex1/ex1.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ex2Component } from './ex2/ex2.component';
import { OperationHistoryComponent } from './ex2/operation-history/operation-history.component';
import { Ex3Component } from './ex3/ex3.component';
import { HttpClientModule } from '@angular/common/http';
import { ShortTransactionComponent } from './ex3/short-transaction/short-transaction.component';
import { TransactionDetailComponent } from './ex3/transaction-detail/transaction-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    Ex2Component,
    OperationHistoryComponent,
    Ex3Component,
    ShortTransactionComponent,
    TransactionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
