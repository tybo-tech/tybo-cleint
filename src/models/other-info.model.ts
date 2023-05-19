export interface OtherInfo {
  Id: number;
  Name: string;
  ItemType: string;
  ImageUrl: string;
  ParentId: number;
  Notes: string;
  ItemValue: any;
  Status: string;
  Decription: string;
  Rules: string;
  ItemCode: string;
  CreateDate?: string;
}

export function initOtherInfo(): OtherInfo {
  return {
    Id: 0,
    Name: '',
    ItemType: '',
    ImageUrl: '',
    ParentId: 4,
    Notes: '',
    ItemValue: {},
    Status: '',
    Decription: '',
    Rules: '',
    ItemCode: '',
  };
}

export interface NavNotificationModel {
  UserId: number;
  UserName: string;
  UserDp: string;
  UserRole: string;
  ActionName: string;
  FullUrl: string;
  ProductId: number;
  ProductName: string;
  ProductImage: string;
  CreateDate: string;
  OrderId: number;
  StatusName: string;
}

export const initNavNavNotification = (): NavNotificationModel => {
  return {
    UserId: 0,
    UserName: 'Guest',
    UserRole: '',
    UserDp: 'https://mattressandco.co.za/api/api/upload/uploads/1669026392.webp',
    ActionName: '',
    FullUrl: '',
    ProductId: 0,
    ProductName: '',
    ProductImage: '',
    CreateDate: '',
    OrderId: 0,
    StatusName: '',
  };
};
