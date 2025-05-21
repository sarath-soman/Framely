import { EditorElement, LeafContent } from "@/lib/editor/component";
import React from "react";
import { useEditor } from "@/app/providers/editor-provider";

type Props = { element: EditorElement };

function InputTextComponent({ element }: Props) {
  const { state, dispatch } = useEditor();
  const leaftNode = element.content as LeafContent;

  const handleOnBlur = (e: React.FocusEvent<Element>) => {
    const textElement = e.target as HTMLInputElement;
    const newText = textElement.value.trim();
    dispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        elementDetails: {
          ...element,
          content: { value: newText },
        },
      },
    });
  };

  return (
    <div
        style={element.styles}
        className="p-[2px] w-full relative transition-all overflow-auto"
      >
        <input
          type="text"
          contentEditable={state.editor.liveMode}
          suppressContentEditableWarning
          className="border-none outline-none w-full"
          onBlur={handleOnBlur}
          style={{
            margin: 0,
            padding: 0,
            ...element.styles,
          }}
          defaultValue={leaftNode.value}
        />
      </div>
  );
}

export default InputTextComponent;
