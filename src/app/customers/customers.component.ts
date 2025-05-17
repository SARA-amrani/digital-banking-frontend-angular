import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
  customers : any;
  errorMessage! : object;
  constructor(private customerService : CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe({
      next : (data)=>{
        this.customers=data;
      },
      error :  (err) => {
        this.errorMessage=err;
      }

    });
  }
}
