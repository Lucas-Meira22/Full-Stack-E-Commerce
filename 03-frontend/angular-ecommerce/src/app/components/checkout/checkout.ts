import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../../services/form-service';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {
  
  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];
  totalPrice:number = 0;
  totalQuantity:number = 0;
  checkoutFormGroup!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private formService:FormService){}
  
  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        country: [''],
        street: [''],
        city: [''],
        state: [''],
        zipCode: ['']
      }),
      billingAddress: this.formBuilder.group({
        country: [''],
        street: [''],
        city: [''],
        state: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({     
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expMonth: [''],
        expYear: ['']
      }),
    })

    this.formService.getCreditCardYear().subscribe(data => {this.creditCardYears = data });
    
    const startMonth: number = new Date().getMonth() + 1;
    this.formService.getCreditCardMonth(startMonth).subscribe(data => {this.creditCardMonths = data });
  }
  copyShippingAddressToBillingAddress($event: Event) {
    if (($event.target as HTMLInputElement).checked) {
      this.checkoutFormGroup.controls['billingAddress'].setValue(this.checkoutFormGroup.controls['shippingAddress'].value);
    }else{
      this.checkoutFormGroup.controls['billingAddress'].reset;
    }
  }

  onSubmit(){
    console.log('Handling the submit button');
    console.log('Customer:', this.checkoutFormGroup.get('customer')?.value);
    console.log('Shipping Address:', this.checkoutFormGroup.get('shippingAddress')?.value);
    console.log('Credit Card:', this.checkoutFormGroup.get('creditCard')?.value); // ← new log
  }

}
