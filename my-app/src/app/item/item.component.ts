import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from 'src/app/model/item';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  item: Item;
  message;

  newItem=new FormGroup({
    item_no: new FormControl('',Validators.nullValidator && Validators.required),
    name: new FormControl('',Validators.nullValidator && Validators.required),
    description: new FormControl('',Validators.nullValidator && Validators.required),
    amount: new FormControl('',Validators.nullValidator && Validators.required)
  });

  constructor(private data: AppService) {
    this.message='';
  }

  add(){
    var json=this.newItem.value;
    this.item=new Item(json['name'],json['amount'],json['item_no'],json['description']);

    this.data.addItem(this.item).subscribe((data) =>
      {
        this.message="The item added";
      },
        err=> {
          this.message="The item exist";
        }
    );

  }

}
