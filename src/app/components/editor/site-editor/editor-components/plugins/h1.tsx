import { EditorElement, IComponent, LeafContent } from "@/lib/editor/component";
import { Heading1 } from "lucide-react";
import React from "react";

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

export default H1;
