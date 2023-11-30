import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';

const routes: Routes = [
  { path: '', redirectTo: '/ex1', pathMatch: 'full' },
  { path: 'ex1', component: Ex1Component },
  { path: 'ex2', component: Ex2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}