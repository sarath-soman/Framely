import { IComponent, LeafContent } from "@/lib/editor/component";
import { FormInputIcon } from "lucide-react";
import React from "react";

const inputTextComponent: IComponent = {
  metadata: {
    label: "Input Text",
    id: "input-text",
    group: "element",
    category: "Input",
    icon: FormInputIcon,
  },
  component: {
    id: "input-text",
    loader: React.lazy(() => import("./input-text")),
    displayName: "Input Text",
  },
  element: {
    styles: {
    },
    name: "Input Text",
    type: "input-text",
    category: "Input",
    content: {
      innerText: "",
    } as LeafContent,    
  },
  controlPanel: {
    enabled: true,
  },
};

export default inputTextComponent;
