import { EditorElement, IComponent, LeafContent } from "@/lib/editor/component";
import { Heading1 } from "lucide-react";

type Props = { element: EditorElement };

function H1({ element }: Props) {
  //Zod parsing
  const leafContent = element.content as LeafContent;
  return (
    <h1
      className="text-4xl font-bold"
      //Should be from the theme (branding resource)
      style={{
        color: element.styles.color,
        textAlign: element.styles.textAlign,
        fontSize: element.styles.fontSize,
        fontWeight: element.styles.fontWeight,
        textDecoration: element.styles.textDecoration,
      }}
    >
      {leafContent?.innerText}
    </h1>
  );
}

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
    component: H1,
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
