import { IComponent, LeafContent } from "@/lib/editor/component";
import { Heading1 } from "lucide-react";
import React from "react";

const H1Component: IComponent = {
  metadata: {
    label: "Heading 1",
    id: "h1",
    group: "element",
    category: "Text",
    icon: Heading1,    
  },
  component: {
    id: "h1",
    loader: React.lazy(() => import("./h1-plugin")),
    displayName: "H1",
  },
  element: {
    styles: {
      color: "#000000",
      textAlign: "left",
      fontSize: "2rem",

      fontWeight: "bold",
      textDecoration: "none",
    },
    name: "Heading 1",
    type: "h1",
    category: "Text",
    content: {
      innerText: "Heading 1",      
    } as LeafContent,
  },
  controlPanel: {
    enabled: true,
},
};

export default H1Component;