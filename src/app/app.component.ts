import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ThumbstackAssign';
  totalAmount = 0;
  totalPrice = 0;
  foodItem= [
    {
      food:'Noodle',
      price: 200
    },
    {
      food:'Burger',
      price: 100
    },
    {
      food:'Pizza',
      price: 450
    },
    {
      food:'Pasta',
      price: 300
    },
    {
      food:'Briyani',
      price: 750
    },
    {
      food:'Sandwich',
      price: 80
    }
  ]
  handleCheck(event: any, price: any){
    if(event.target.checked === true){
      this.totalPrice = this.totalPrice + price
    } else{
      this.totalPrice = this.totalPrice - price
    }
    console.log(this.totalPrice)
    this.checkTotalAmount();
  }

  checkTotalAmount(){
    this.totalAmount = 0;
    this.totalAmount = (0.1* this.totalPrice) + this.totalPrice
  }
}
