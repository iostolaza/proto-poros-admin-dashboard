// Menu models for sidebar navigation.
// References:
// - TypeScript interfaces for menu structure.
// - Changed label to required for type safety in trackBy and templates (fixes TS2322).

export interface SubMenuItem {
  label: string;  // Made required to avoid undefined errors
  route: string | null;
  icon?: string;
  children?: SubMenuItem[];
  active?: boolean;
  expanded?: boolean;
}

export interface MenuItem {
  group: string;
  separator?: boolean;
  items: SubMenuItem[];
  active?: boolean;
}
