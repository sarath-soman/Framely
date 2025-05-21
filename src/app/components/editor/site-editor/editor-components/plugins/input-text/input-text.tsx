import { EditorElement, LeafContent } from "@/lib/editor/component";
import React from "react";
import TextComponent from "../../text";
import ElementWrapper from "../../element-wrapper";
import { useEditor } from "@/app/providers/editor-provider";

type Props = { element: EditorElement };

function InputTextComponent({ element }: Props) {
  const { state, dispatch } = useEditor();
  const leaftNode = element.content as LeafContent;
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
          style={{
            margin: 0,
            padding: 0,
            ...element.styles,
          }}
          defaultValue={leaftNode.innerText}
        />
      </div>
  );
}

export default InputTextComponent;
