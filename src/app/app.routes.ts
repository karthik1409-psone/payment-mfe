import { RouterModule } from '@angular/router';

const routes = [
    {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
    }
];

export default RouterModule.forRoot(routes);