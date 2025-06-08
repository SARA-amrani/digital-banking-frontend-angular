import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../services/customer.service";
import { catchError, map, Observable, throwError } from "rxjs";
import { Customer } from "../model/customer.model";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers!: Observable<Array<Customer>>;
  errorMessage!: string;
  searchFormGroup: FormGroup | undefined;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Corrigé : initialisation d'abord, puis appel
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control("")
    });
    this.handleSearchCustomers();
    this.customers = this.customerService.getCustomer().pipe(
      map(customers => {
        console.log("Clients reçus :", customers); // pour debug
        return customers;
      }),
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(() => err);
      })
    );
  }

  handleSearchCustomers() {
    let kw = this.searchFormGroup?.value.keyword;
    this.customers = this.customerService.searchCustomer(kw).pipe(
      map(customers => {
        console.log("Clients reçus :", customers); // pour debug
        return customers;
      }),
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(() => err);
      })
    );
  }

  handleDeleteCustomer(c: Customer) {
    let conf = confirm("Are you sure?");
    if (!conf) return;
    this.customerService.deleteCustomer(c.id).subscribe({
      next: () => {
        this.customers = this.customers.pipe(
          map(data => {
            let index = data.indexOf(c);
            if (index !== -1) data.splice(index, 1); // Corrigé : splice au lieu de slice
            return data;
          })
        );
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handleCustomerAccounts(customer: Customer) {
    this.router.navigateByUrl("/customer-accounts/" + customer.id, { state: customer });
  }
}
