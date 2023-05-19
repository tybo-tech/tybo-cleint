import { Customer } from './customer.model';
import { JobItem } from './job-item.model';
import { Order, OrderModel } from './order.model';
import { User } from './user.model';

export interface Job {
  ShippingPrice: number;
  Shipping: string;
  JobId: string;
  CompanyId: string;
  CustomerId: string;
  CustomerName: string;
  JobNo: string;
  Tittle: string;
  JobType: string;
  Description: string;
  TotalCost: number;
  TotalDays: 0;
  StartDate?: any;
  DueDate?: any;
  Status: string;
  Class: string;
  OrderId?: string;
  CreateDate?: string;
  CreateUserId: string;
  ModifyDate?: string;
  ModifyUserId: string;
  StatusId: number;
  CountOrders: number;
  Customer?: Customer;
  Tasks?: any[];
  JobItems?: JobItem[];
  //Orders?: Order[];
  Order?: OrderModel;
}
