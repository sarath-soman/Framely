export type ElementTypesAlias =
  | "component"
  | "container"  
  | "2Col"
  | "3Col"
  | "__body"
  | null;

export type ElementTypes = string;

export type CategoryTypes = "Body" | "Container" | "Text" | "Link" | "Basic" | "Input" | "Atoms" |null;

export const defaultStyles: React.CSSProperties = {
  backgroundPosition: "center",
  objectFit: "cover",
  backgroundRepeat: "no-repeat",
  textAlign: "left",
  opacity: "100%",
};

export const categoriesWithCustomSettings: CategoryTypes[] = [
  "Text",
  "Link",
  "Basic",
];
