// src/app/core/models/menu.model.ts
// Interfaces for menu data structure, enabling type safety and recursion for submenus.
// Based on repo's models for hierarchical navigation.

export interface MenuItem {
  group: string;
  separator?: boolean;
  selected?: boolean;
  active?: boolean;
  items: Array<SubMenuItem>;
}

export interface SubMenuItem {
  icon?: string;
  label?: string;
  route?: string | null;
  expanded?: boolean;
  active?: boolean;
  children?: Array<SubMenuItem>;
}
