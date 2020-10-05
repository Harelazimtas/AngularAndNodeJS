export class Item
{
  item_no:number;
  name:string;
  amount:number;
  description:String;

  constructor(name: string, amount :number, item_no : number, description: string){
    this.amount=amount;
    this.description=description;
    this.item_no=item_no;
    this.name=name;
  }

}
