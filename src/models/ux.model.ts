import { IContextMenu, IResizer, ToastModel } from './utils.model';

export interface UxModel {
  Toast?: ToastModel;
  ContextMenu?: IContextMenu;
  Resizer?: IResizer;
  Loading?: boolean;
  Moving?: IMoving;
  IncreasinSize?: IMoving;
  ReturnUrl?: string;
}

export interface IKey {
  Shift?: boolean;
}
export interface IMoving {
  Id: string;
  Name: string;
  ElementId?: string;
  Image?: string;
}
export interface IKeyValue {
  Key: string;
  Value: string;
  Style?: string;
  Image?: string;
}

export const kv = (): IKeyValue => {
  return { Key: '', Value: '' };
};
