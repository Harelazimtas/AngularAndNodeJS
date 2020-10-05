import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-get-all-items',
  templateUrl: './get-all-items.component.html',
  styleUrls: ['./get-all-items.component.css']
})
export class GetAllItemsComponent {
  items;

  constructor(private data: AppService) {
    this.items=[];
   }

  getItems():void{
    this.data.getItems().subscribe((json)=>{
      this.items=json['items']
    },
      err=>alert("error")
    )
  }
}
