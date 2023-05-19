export interface ToastModel {
  Message: string;
  Title: string;
  Classes: string[];
}

export interface ITab {
  Id: any;
  Name: string;
  Classes: string[];
}
export interface ICss {
  mode?: string;
  units: string;
  value: string;
  key: string;
}

export interface IFont {
  Id: string;
  Name: string;
  Url: string;
  Variations: number[];
}

export interface IContextMenu {
  x: string;
  y: string;
  visible: boolean;
}
export interface IResizer {
  x: string;
  y: string;
  w: string;
  h: string;
  visible: boolean;
}
export interface ISwitch {
  Label: string;
  Value: string;
  Classes: string[];
  Selected?: Boolean;
  Style?: any;
}
export interface IFlex {
  Icon: string;
  IconActive: string;
  Group: string;
  Hover: boolean;
  Active: boolean;
  Values: { Align: string; Justify: string };
}

export interface IClass {
  top: string;
  left: string;
  width?: string;
  height?: string;
}
export interface IPayment {
  id: string;
  type: string;
  name: string;
  img: string;
  icon: string;
  selected: boolean;
  key: string;
  pass: string;
  bankName: string;
  accountNumber: string;
  branchCode: string;
  accountHolder: string;
  accountType: string;
  style: { color: string; 'font-size': string; 'line-height': number };
}

export const initIPayment = (): IPayment => {
  return {
    accountHolder: '',
    name: '',
    accountNumber: '',
    accountType: '',
    selected: false,
    bankName: '',
    branchCode: '',
    id: '',
    key: '',
    pass: '',
    type: '',
    img: '',
    icon: '',
    style: { color: '', 'font-size': '', 'line-height': 0 },
  };
};

export const initSwitch = (
  Name = '',
  Value = '',
  Classes: string[] = [],
  Selected = false
): ISwitch => {
  return {
    Label: Name,
    Value: Value,
    Classes: Classes,
    Selected: Selected,
  };
};

export interface IBread {
  Id: any;
  Name: string;
  Classes: string[];
}

export interface IProfileTab {
  Id: string;
  Name: string;
}

export interface IProfileTab {
  Id: string;
  Name: string;
}
