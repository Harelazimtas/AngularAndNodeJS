import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})

export class ActionComponent {
  item;
  message;

  formDetail=new FormGroup({
    item_no: new FormControl('',Validators.nullValidator && Validators.required),
    action: new FormControl('',Validators.nullValidator && Validators.required)

  });

  constructor(private data: AppService) {
    this.setItem();
    this.message='';
  }

  request(): void{

    if(this.formDetail.value['action']== "get"){
      this.data.getItemById(this.formDetail.value['item_no']).subscribe((json) =>
      {
        this.item['name']=json['name'];
        this.item['amount']=json['amount'];
        this.item['item_no']=json['item_no'];
        this.item['description']=json['description'];
        this.message='';
      },
      err=>{this.message="the item don't exist";
      this.setItem();
    });
    }
    else{
      this.data.deleteById(this.formDetail.value['item_no']).subscribe((json) =>
      {
        this.message="The item delete";
      },
      err=>{
        this.message="Error in delete this item";
      });
    }
  }

  setItem(): void{
    this.item={'name':'','amount':'','item_no':'','description':''};
  }

}
