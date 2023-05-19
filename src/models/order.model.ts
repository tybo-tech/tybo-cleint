import { Customer } from "./customer.model";
import { OrderProduct } from "./order-product.model";
import { User } from "./user.model";

export interface Order {
  CountCart: number;
  OrderId: number;
  InvoiceNumber: string;
  UserId: number;
  OwnerId: number;
  ItemsTotal: number;
  Total: number;
  Vat: number;
  Discount: number;
  DiscountCode: string;
  DeliveryMethod: string;
  DeliveryFee: number;
  DeliveryAddressId: number;
  CreateDate: string;
  CreatedBy: number;
  FulfilDate: string;
  StatusName: string
  PaymentMethod: string
  PaymentStatus: string
  PaymentChannel: string
  Products?: OrderProduct[];
  Owner?: User;
  Customer?: User;
  CustomerName?: string;
  OrderNo?: string;
}



export interface OrderModel {
  OrdersId: string;
  OrderNo: string;
  CompanyId: string;
  CustomerId: string;
  AddressId: string;
  Notes: string;
  OrderType: string;
  Total: number;
  Shipping?: string;
  ShippingPrice?: number;
  Paid: number;
  Due: number;
  CountOrders: number;
  InvoiceDate: Date;
  DueDate: string;
  EstimatedDeliveryDate?: string;
  OrderSource?: string;
  CreateDate?: string;
  CreateUserId: string;
  ModifyDate?: string;
  FulfillmentStatus?: string;
  ModifyUserId: string;
  Status: string;
  StatusId: number;
  Orderproducts?: Orderproduct[];
  Customer?: Customer;
  Company?: User;
  GoBackToCreateOrder?: boolean;
  ItemsTotal?: number;
  CountCart: number;
  PaymentMethod:string;
  UserId:string;
  JobId:string;
  PaymentStatus:string;
}

export interface Orderproduct {
  Id: string;
  OrderId: string;
  ProductId: string;
  CompanyId: string;
  ProductName: string;
  ProductType: string;
  Size: string;
  Colour: string;
  FeaturedImageUrl: string;
  UnitPrice: number;
  Quantity: number;
  SubTotal: number;
  CreateDate?: string;
  CreateUserId: string;
  ModifyDate?: string;
  ModifyUserId: string;
  StatusId: number;
};

