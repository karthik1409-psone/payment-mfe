import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakePaymentComponent } from '../make-payment/make-payment.component';
import routes from './payment.routes';



@NgModule({
  declarations: [
    MakePaymentComponent
  ],
  imports: [
    CommonModule,
    routes
  ]
})
export class PaymentModule { }
