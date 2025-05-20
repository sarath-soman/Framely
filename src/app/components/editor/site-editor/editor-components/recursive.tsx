import TextComponent from "./text";
import Container from "./container";
import ImageElement from "./image";
import { EditorElement } from "@/lib/editor/component";
import React, { Suspense } from "react";
import { Registry } from "@/lib/editor/registry";
import ElementWrapper from "./element-wrapper";

type Props = {
  element: EditorElement;
};

function Recursive({ element }: Props) {
  switch (element.type) {
    case "__body":
      return <Container element={element} />;
    case "container":
      return <Container element={element} />;
    case "2Col":
      return <Container element={element} />;
    case "3Col":
      return <Container element={element} />;
    case "image":
      return <ImageElement element={element} />;
  }

  const component = Registry.getComponent(element.type);
  if (component) {
    const Component = component.component.loader;
    return (
      <ElementWrapper element={element}>
        <Suspense fallback={<div>Loading...</div>}>
          <Component element={element} />
        </Suspense>
      </ElementWrapper>
    );
  }
  switch (element.category) {
    case "Text":
      return <TextComponent element={element} />;
    default:
      return null;
  }
}

export default Recursive;
