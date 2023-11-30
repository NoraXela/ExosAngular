import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Component } from './ex3/ex3.component';
import { TransactionDetailComponent } from './ex3/transaction-detail/transaction-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/ex1', pathMatch: 'full' },
  { path: 'ex1', component: Ex1Component },
  { path: 'ex2', component: Ex2Component },
  { path: 'ex3', component: Ex3Component },
  { path: 'ex3/detail', component: TransactionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
