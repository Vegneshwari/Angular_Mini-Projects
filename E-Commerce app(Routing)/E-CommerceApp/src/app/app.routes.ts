import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CartComponent } from './Pages/cart/cart.component';
import { SaleComponent } from './Pages/sale/sale.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { CartSummaryComponent } from './Pages/cart/cart-summary/cart-summary.component';
import { CartCheckoutComponent } from './Pages/cart/cart-checkout/cart-checkout.component';
import { ShopnowComponent } from './Pages/shopnow/shopnow.component';
import { combineLatest } from 'rxjs';
import { OffersComponent } from './Pages/offers/offers.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'}, //redirect route
    {path: 'shopnow', component: ShopnowComponent,
        children:[
            {path: 'offers', component: OffersComponent}
        ]
    },
    {path: 'home', component: HomeComponent},
    {path: 'cart/:id', component: CartComponent, //route parameters

        children: [ //child routes
            {path: 'summary', component: CartSummaryComponent},
            {path: 'checkout', component: CartCheckoutComponent}
        ]
    }, 
    {path: 'sale', loadComponent: ()=> import('./Pages/sale/sale.component').then(val=>val.SaleComponent)}, //lazyloading component
    {path: '**', component: PageNotFoundComponent} //wildcard route
];



//gaurd and lazyloa module - yet to learn