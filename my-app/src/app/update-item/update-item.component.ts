import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent {
  message;

  actionItem=new FormGroup({
    item_no: new FormControl('',Validators.nullValidator && Validators.required),
    amount: new FormControl('',Validators.nullValidator && Validators.required),
    action: new FormControl('',Validators.nullValidator && Validators.required)
  });

  constructor(private data: AppService) {
    this.message='';
  }

  depositOrWithdraw(): void{
    if(this.actionItem.value['action']== 'deposit'){
      this.data.deposit(this.actionItem.value['item_no'],this.actionItem.value['amount']).
      subscribe((json)=>{
        this.message=json['message'];
      },
        err=>{
          this.message="The item don't exist";
      })
    }else{
      this.data.withdraw(this.actionItem.value['item_no'],this.actionItem.value['amount']).
      subscribe((json)=>{
        this.message=json['message'];
      },
        err=>{
          this.message="The item don't exist";
      })
    }
  }

}
