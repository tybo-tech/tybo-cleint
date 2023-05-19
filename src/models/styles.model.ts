import { ISwitch } from "./utils.model";

export interface StyleSimpleModel {
  Key: string;
  Icon: string;
  Value: any;
  Units?: any;
  Type?: string;
  Max?: number;
  Id?: number;
}
export interface StyleSimpleGroupModel {
  Id: string;
  Items: StyleSimpleModel[];
  Editing: boolean;
  Name: string;
}
export interface AccordionModel {
  Id: string;
  Open: boolean;
  Name: string;
}
export interface StyleGroupBetta {
  Group: {
    Name: string;
    Id: string;
    Open: boolean;
    IsDynamicData?: boolean;
    Types: any;
    Styles: StyleBetta[];
    OpenedIcon: string;
    ClosedIcon: string;
  };
}

export interface StyleBetta {
  Id: string;
  Label: string;
  CanLabel: boolean;
  Units: string;
  Type: string;
  Value: any;
  Options: ISwitch[];
  Options2?: string[];
  Classes?: string[];
  Style?: any;
  StyleMode?: string;
  Styles?: StyleBetta[];
}

export const initStyleBetta = (type: string,value = ''): StyleBetta => {
  return {
    Id: type,
    Label: '',
    CanLabel: false,
    Value: value,
    Units: '',
    Type: '',
    Options: [],
  };
};
