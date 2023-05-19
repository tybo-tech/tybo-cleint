export interface Shipping {
  ShippingId: string;
  CompanyId: string;
  Name: string;
  Description: string;
  Price: number;
  ImageUrl: string;
  CreateDate?: string;
  CreateUserId?: string;
  ModifyDate?: string;
  ModifyUserId?: string;
  StatusId: number;
  Selected: boolean;
}
