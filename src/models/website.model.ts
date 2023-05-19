import { Product } from './product.model';
import { IResizer } from './utils.model';
import { CMSCollection } from './cms.model';
import { getId } from 'src/services/helper';

export interface WebsiteModel {
  Id?: number;
  WebsiteId: string;
  Slug: string;
  Url: string;
  Title?: string;
  Name?: string;
  Status: string;
  CreatedBy: string;
  OwnerId: string;
  Pages: PageModel[];
  Sections: ElementModel[];
  Imports: WebsiteImport[];
  CMSCollections?: CMSCollection[];
  Theme: WebsiteTheme;
  Page?: PageModel;
  Element?: ElementModel;
  Body?: ElementModel;
  ElementToPaste?: ElementModel;
  Elements?: ElementModel[];
  SelectedElements?: ElementModel[];
  GlobalElements?: ElementModel[];
  ShowPages?: boolean;
  ShowAssets?: boolean;
  ShowLayers?: boolean;
  Editing?: boolean;
  Device?: string;
  Cover?: string;
  Mode?: string;
}

export interface PageModel {
  Id?: number;
  OwnerId: string;
  CreatedBy: string;
  Status: string;
  PageId: string;
  WebsiteId: string;
  PageName: string;
  IsHome?: string;
  ShowMenu?: boolean;
  Url: string;
  OrderNo: number;
  PcStyles: any;
  TabStyles: any;
  PhoneStyles: any;
  Sections: ElementModel[];
  Classes?: string[];
}

export interface ElementModel {
  Id?: number;
  ElementId?: string;
  ParentId?: string;
  OrderNo?: number;
  Name: string;
  SelectorName: string[];
  Type: string;
  Data: any;
  PcStyles: any;
  TabStyles: any;
  PhoneStyles: any;
  Children: ElementModel[];
  PlaceHolder?: string;
  OnHover?: any;
  Link: string;
  ExternalLink?: string;
  FormId: string;
  Events: EventModel[];
  Rules?: RuleModel;
  MouseOver?: boolean;
  Editing?: boolean;
  IsSelectedClass?: string[];
  WebsiteId?: string;
  PageId?: string;
  MapId?: string;
  Status: string;
  CreatedBy: string;
  Product?: Product;
  State?: string;
  Editable?: boolean;
  Draggable?: boolean;
  IsDynamicData?: boolean;
  IsDynamicDataList?: boolean;
  Resizer?: IResizer;
  TempType?: string;
  Mappings?: IMapping;
  Category?: string;
  Cover?: string;
  Label?: string;
  IsGlobalParent?: string;
  Metadata?: MetadataModel;
}

export interface MetadataModel {
  IconType?: string;
  IconClass?: string;
}
export interface EventModel {
  Id?: string;
  Name?: string;
  Type: string;
  TargetId: string;
  TargetName?: string;
  Trigger?: string;
  Slug?: string;
  TableName?: string;
  TableId?: string;
  DataMapping?: EventDataMapping[];
  Then?: EventModel;
}

export interface IEventOptions {
  Id: string;
  Name: string;
  Type: string;
}
export interface IEventTypes {
  Id: string;
  Name: string;
  Items: any[];
  Options: IEventOptions[];
}
export interface EventDataMapping {
  ColumnId: string;
  ColumnName: string;
  ElementId: string;
  DataType: string;
  ElementName: string;
}
export interface WebsiteImport {
  Id: number;
  Type: string;
  Name: string;
  Url: string;
  Variations: number[];
}
export interface WebsiteTheme {
  Groups: IThemeGroup[];
}
export interface RuleModel {
  VissibleToLoggedIn: boolean;
  VissibleToLoggedOut: boolean;
  Role?: string;
}
export interface IThemeGroup {
  Group: string;
  Items: IValueId[];
}
export interface IMapping {
  Id: string;
  Type: string;
  Function: string;
  Format: string;
  Status: string;
  CreateDate: string;
  IsArray: boolean;
}
export interface IValueId {
  Value: string;
  Id: string;
}

export const initMapping = (): IMapping => {
  return {
    CreateDate: `${new Date()}`,
    Format: '',
    Function: '',
    Id: getId('map'),
    IsArray: false,
    Status: 'Active',
    Type: '',
  };
};
export const initPage = (webId = ''): PageModel => {
  return {
    PageId: getId('page'),
    WebsiteId: webId,
    PageName: '',
    Url: '',
    IsHome: 'No',
    OrderNo: 1,
    Id: 0,
    Sections: [],
    PcStyles: {},
    TabStyles: {},
    PhoneStyles: {},
    OwnerId: 'admin',
    CreatedBy: 'admin',
    Status: 'active',
  };
};
