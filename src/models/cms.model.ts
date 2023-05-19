import { getId } from "src/services/helper";

export interface CMSCollection {
  Id: string;
  WebsiteId: string;
  CreateDate: string;
  LastModiefiedDate: string;
  Name: string;
  Columns: CMSColumn[];
  Status: string;
  LastModiefiedBy: string;
  CreatedBy: string;
  Data: CMSData[];
}
export interface CMSColumn {
  Id: string;
  TableId: string;
  CreateDate: string;
  Name: string;
  Type: string;
  MinLength: number;
  MaxLength: number;
  IsRequired: string;
  IsArray: string;
  CanDelete: boolean;
  Status: string;
  LastModiefiedDate: string;
  LastModiefiedBy: string;
  CreatedBy: string;
}
export interface CMSData {
  Id: number;
  ColumnId: string;
  ColumnName: string;
  ColumnType?: string;
  Slug: string;
  TableId: string;
  Metadata: any;
  CreateDate: string;
  RecordId: string;
  Value: string;
  LastModiefiedDate: string;
  LastModiefiedBy: string;
  CreatedBy: string;
  WebsiteId: string;
  Selected?: boolean;
}

export const initCMSCollection = (
  userId: string,
  name = 'Table 1',
  websiteId = ''
): CMSCollection => {
  return {
    Id: getId('table'),
    CreateDate: `${new Date()}`,
    LastModiefiedDate: `${new Date()}`,
    Name: name,
    Status: 'Active',
    Columns: [],
    WebsiteId: websiteId,
    CreatedBy: userId,
    LastModiefiedBy: userId,
    Data: [],
  };
};

export const initCMSColumn = (
  isRequired: string,
  canDelete: boolean,
  userId: string,
  name = 'Column 1',
  tableId = '',
  type = 'text'
): CMSColumn => {
  return {
    Id: getId('column'),
    CreateDate: `${new Date()}`,
    LastModiefiedDate: `${new Date()}`,
    Name: name,
    Status: 'Active',
    CreatedBy: userId,
    LastModiefiedBy: userId,
    IsRequired: isRequired,
    CanDelete: canDelete,
    MaxLength: 1000000,
    IsArray: 'no',
    MinLength: 0,
    TableId: tableId,
    Type: type,
  };
};

export const initCMSData = (
  recordId: string,
  websiteId: string,
  userId: string,
  columnId: string,
  columnName: string,
  value: string,
  tableId = '',
  metadata = {}
): CMSData => {
  return {
    Id: 0,
    RecordId: recordId,
    CreateDate: ``,
    LastModiefiedDate: ``,
    Slug: ``,
    CreatedBy: userId,
    LastModiefiedBy: userId,
    TableId: tableId,
    Metadata: metadata,
    ColumnId: columnId,
    ColumnName: columnName,
    Value: value,
    WebsiteId: websiteId,
  };
};
