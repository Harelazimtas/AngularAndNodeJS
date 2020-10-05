import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './model/item';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '';

  getItems() {
    return this.http.get(this.rootURL + '/getAllItems');
  }

  getItemById(id : Number) {
    return this.http.get(this.rootURL + '/getItemById/'+id);
  }

  addItem(item: Item) {
    return this.http.post(this.rootURL + '/addItem', {item});
  }

  deleteById(id : Number) {
    return this.http.delete(this.rootURL + '/deleteById/'+id);
  }

  deposit(id: Number,amount: Number){
    return this.http.get(this.rootURL + '/deposit/'+id+"/"+amount);
  }

  withdraw(id: Number,amount: Number){
    return this.http.get(this.rootURL + '/withdraw/'+id+"/"+amount);
  }

}
