import { EditorElement } from "@/lib/editor/component";
import React from "react";
import TextComponent from "../../text";

type Props = { element: EditorElement };

function H1Component({ element }: Props) {
  return (
    <TextComponent element={element} />
  );
}

export default H1Component;
