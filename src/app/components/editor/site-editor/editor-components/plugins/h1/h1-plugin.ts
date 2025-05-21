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
    loader: React.lazy(() => import("./h1")),
    displayName: "H1",
  },
  element: {
    styles: {
      color: "black",
      fontSize: "2.5rem",
      fontWeight: "700",
      lineHeight: "1.2",
      marginBottom: "0.5rem",
      objectFit: "cover",
      backgroundRepeat: "no-repeat",
      textAlign: "left",
      opacity: "100%",
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
