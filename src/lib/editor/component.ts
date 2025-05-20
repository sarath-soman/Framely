import React, { FC, JSX } from "react";
import { CategoryTypes, ElementTypes } from "../constants";
import { LucideIcon } from "lucide-react";

type GenericComponent<
  P = {
    element: EditorElement;
  }
> = FC<P>;

export type IComponent = {
  metadata: IComponentMetadata;
  component: IComponentData;
  element: Omit<EditorElement, "id">;
  controlPanel: IControlPanel;
};
export type IComponentMetadata = {
  label: string;
  id: ElementTypes;
  group: "layout" | "element";
  category: CategoryTypes;
  icon: LucideIcon;
};

// TODO: How should we handle this? Every component would have its own props type
type Props = any;

export type IComponentData = {
  id: string;
  displayName: string;
  loader: React.LazyExoticComponent<(props: Props) => JSX.Element>;  
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
