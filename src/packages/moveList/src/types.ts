export interface IMoveItem {
  label: string;
  value: string;
  [propName: string]: any;
}

export interface IMoveListItem extends IMoveItem {
  index: number;
}
