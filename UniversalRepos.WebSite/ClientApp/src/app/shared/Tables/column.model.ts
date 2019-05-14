export enum ColumnTypes {
  'date',
  'button',
  'buttonLink',
  'short',
  'url',
  'medium',
  'normal',
  'array',
  'checkbox'
}
export enum ButtonStyle {
  'info',
  'danger',
  'stroked_accent',
  'stroked_info',
  'warn',
  'accent'
}
export class Column {
  id: string;
  name: string;
  property: string;
  type: ColumnTypes;
  visibility: boolean;
  sortable: boolean;
  constructor(name, property, id?, type = ColumnTypes.normal, sortable = true, visibility = true) {
    if (id) {
      this.id = id;
    } else {
      this.id = property;
    }
    this.name = name;
    this.property = property;
    this.type = type;
    this.visibility = visibility;
    this.sortable = sortable;
  }
}

export class CheckBoxColumn extends Column {
  disabled: boolean;
  constructor(name, property, id?, disabled = true, visibility = true) {
    super(name, property, id, ColumnTypes.checkbox, false, visibility);
    this.disabled = disabled;
  }
}
export class ButtonColumn extends Column {
  action: string;
  link: string;
  style: string;
  icon: string;
  tooltip: string;
  constructor(name, property, action, style, icon = 'info_outline', id?, tooltip?, visibility = true, type = ColumnTypes.button) {
    super(name, property, id, type, false, visibility);
    this.action = action;
    this.style = style;
    this.icon = icon;
    this.tooltip = tooltip;
  }
}
export class DeleteButtonColumn extends ButtonColumn {
  constructor(name, property, action) {
    super(name, property, action, ButtonStyle.danger, 'delete_forever', 'delete', 'Supprimer');
  }
}
export class RouterLinkColumn extends ButtonColumn {
  routerLink: string;
  queryParams: string;
  constructor(name, property, routerLink, style, icon = 'info_outline', queryParams = null, id?, tooltip?, visibility = true) {
    super(name, property, null, style, icon, id, tooltip, visibility, ColumnTypes.buttonLink);
    this.routerLink = routerLink;
    this.queryParams = queryParams;
  }
}

