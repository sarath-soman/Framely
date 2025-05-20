import { CategoryTypes, ElementTypes } from "@/lib/constants";
import { IComponent, IComponentMetadata } from "@/lib/editor/component";
import { Registry } from "@/lib/editor/registry";
import {
  Columns2,
  Columns3,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Image,
  Link,
  LucideIcon,
  Pilcrow,
  SquareDashed,
  Text,
} from "lucide-react";
import H1Component from "../../../site-editor/editor-components/plugins/h1";

Registry.registerComponent(H1Component.metadata.id, H1Component);

const h1: IComponent | null = Registry.getComponent("h1");
if (!h1) {
  throw new Error("H1 component not found in registry");
}
export const elements: IComponentMetadata[] = [
  h1.metadata,
  {
    label: "Heading 2",
    id: "h2",
    group: "element",
    category: "Text",
    icon: Heading2,
  },
  {
    label: "Heading 3",
    id: "h3",
    group: "element",
    category: "Text",
    icon: Heading3,
  },
  {
    label: "Heading 4",
    id: "h4",
    group: "element",
    category: "Text",
    icon: Heading4,
  },
  {
    label: "Heading 5",
    id: "h5",
    group: "element",
    category: "Text",
    icon: Heading5,
  },
  {
    label: "Heading 6",
    id: "h6",
    group: "element",
    category: "Text",
    icon: Heading6,
  },
  {
    label: "Paragraph",
    id: "p",
    group: "element",
    category: "Text",
    icon: Pilcrow,
  },
  {
    label: "Span",
    id: "span",
    group: "element",
    category: "Text",
    icon: Text,
  },
  {
    label: "Container",
    id: "container",
    group: "layout",
    category: "Container",
    icon: SquareDashed,
  },
  {
    label: "2 Columns",
    id: "2Col",
    group: "layout",
    category: "Container",
    icon: Columns2,
  },
  {
    label: "3 Columns",
    id: "3Col",
    group: "layout",
    category: "Container",
    icon: Columns3,
  },
  {
    label: "Image",
    id: "image",
    group: "element",
    category: "Basic",
    icon: Image,
  },
  {
    label: "Link",
    id: "link",
    group: "element",
    category: "Basic",
    icon: Link,
  },
];
