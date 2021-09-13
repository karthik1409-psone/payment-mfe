import { RouterModule } from '@angular/router';
import { MakePaymentComponent } from '../make-payment/make-payment.component';

const routes = [
    {
        path: '',
        component: MakePaymentComponent
    }
];

export default RouterModule.forChild(routes);