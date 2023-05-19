import { IMeasurement } from "./measurement.model";
import { User } from "./user.model";

export interface Product {
  SalePrice: number;
  Featured: string;
  WebsiteId: string;
  ProductId: number;
  OwnerId: number;
  Owner?: User;
  Name: string;
  Description: string;
  Sex: string;
  Category: string;
  SubCategory: string;
  ProductType: string;
  Tags: string;
  Price?: number;
  StatusName: string;
  CreateDate: string;
  CreatedBy: number;
  Images: ImageItemModel[];
  Options?: ProductOptionsModel;
  Qty?: number;
  SelectedQuantity?: number;
}

export interface ImageItemModel {
  Url: string;
  AltText: string;
  Show?: boolean;
}


export interface ProductOptionsModel {
  Colors: ColorModel[];
  Sizes: SizeModel[];
  AllowMeasurements: boolean;
  Measurements : IMeasurement[];
}

export interface ColorModel {
  ColorName: string;
  ColorValue: string;
  Selected?: boolean;

}


export interface SizeModel {
  SizeName: string;
  SizeValue: string;
  Selected?: boolean;
}

