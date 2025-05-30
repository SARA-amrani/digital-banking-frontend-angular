import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {AccountsComponent} from './accounts/accounts.component';
import {NewCustomerComponent} from './new-customer/new-customer.component';
import {CustomersAccountsComponent} from './customers-accounts/customers-accounts.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path :"login", component : LoginComponent},
  { path :"", redirectTo: "/login", pathMatch:"full"},
  { path :"customers", component : CustomersComponent},
  { path :"accounts", component : AccountsComponent},
  { path :"new-customer", component : NewCustomerComponent},
  { path :"customers-accounts/:id", component : CustomersAccountsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
