import { FC } from "react";
import { CategoryTypes, ElementTypes } from "../constants";

type GenericComponent<
  P = {
    element: EditorElement;
  }
> = FC<P>;

export type IComponent = {
  metadata: IComponentMetadata;
  component: IComponentData;
  element: EditorElement;
  controlPanel: IControlPanel;
};
export type IComponentMetadata = {
  icon: string;
  type: ElementTypes;
  category: CategoryTypes;
  designSystem: "atom" | "molecule" | "gmolecule" | "organism" | "system";
};

export type IComponentData = {
  id: string;
  component: GenericComponent<{
    element: EditorElement;
  }>;
  preview: GenericComponent<{
    element: EditorElement;
  }>;
  props?: {
    element: EditorElement;
  };
};

export type IControlPanel = {
  enabled: boolean;
};

export type EditorElement = {
  id: string;
  styles: React.CSSProperties;
  name: string;
  description?: string;
  type: ElementTypes;
  category: CategoryTypes;
  content: EditorElement[] | LeafContent;
};

export type LeafContent = {
  href?: string;
  innerText?: string;
  imageUrl?: string;
  altText?: string;
  destinationUrl?: string;
};

// Registry.registerComponent("id", In)

//plugin release mangement
//different reqistries | external components

//Interface - i18n,
//Preview
//JSX
//Control Panel
//Runtime
//Data driven plugin registration - build time automated plugin identification and
// metadata construction (nx project list)

//system level components needs a template project setup with build target conforming to our contract

//backward compatibility - versioning
//radix themes

//externalise sdks, lib dependencies
