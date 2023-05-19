
export interface OrderProduct {
  Id:number ;
  OrderId:number ;
  ProductId:number ;
  Name:string ;
  ImageUrl:string ;
  Price?:number ;
  Qty?:number ;
  SubTotal:number ;
  Status:string ;
  CreateDate:string ;
  Notes: string
}
