import { Address } from "./adress.model";
import { IMeasurement } from "./measurement.model";
import { Order } from "./order.model";
import { Product } from "./product.model";

export interface User {
  UserId: number;
  DeliveryFee: number;
  Name: string;
  Email: string;
  PhoneNumber: string;
  Password: string;
  Status: string;
  JoinDate: string;
  Role: string;
  ParentId: number;
  ImageUrl: string;
  Banner: string;
  Slug:string;
  Background:string;
  Color:string;
  AddressLine:string;
  BankName:string;
  BankAccNo:string;
  BankAccHolder:string;
  BankBranch:string;
  GuidId: string; 
  AddressLineHome: string; 
  Street: string; 
  City: string; 
  Province: string; 
  PostalCode: string; 
  Address?: Address;
  Addresses?: Address[];
  DraftOrder?: Order;
  Products?: Product[];
  Measurements : IMeasurement[]
}
