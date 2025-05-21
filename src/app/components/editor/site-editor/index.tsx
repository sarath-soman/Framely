"use client";

import { useEditor } from "@/app/providers/editor-provider";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ArrowLeft, EyeOff } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import Recursive from "./editor-components/recursive";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { getLink } from "@/lib/getLink";
import { usePlugins } from "./editor-components/plugins/plugin-loader";

type Props = { siteId: string; liveMode?: boolean };

function SiteEditor({ siteId, liveMode }: Props) {
  const { state, dispatch } = useEditor();
  const isMobile = useIsMobile();

  usePlugins();
  
  useEffect(() => {
    if (liveMode) {
      dispatch({
        type: "TOGGLE_LIVE_MODE",
        payload: { value: true },
      });
    }
  }, [liveMode, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const response = {
        success: true,
        msg: "",
        id: "cmavbussf00000p84hm2mpjba",
        userId: "user_2",
        title: "Example",
        previewImage: null,
        favicon: null,
        visible: false,
        content:
          '[{"content":[{"content":{"innerText":"Test"},"id":"u358yenwyef5yit8q265s72s","name":"Heading 1","styles":{"color":"#ffffff","backgroundPosition":"center","objectFit":"cover","backgroundRepeat":"no-repeat","textAlign":"left","opacity":"100%","fontSize":"2.5rem","fontWeight":"700","lineHeight":"1.2","marginBottom":"0.5rem"},"type":"h1","category":"Text"},{"content":{"innerText":"Writing a WYSIWYG editor.\\nAsadasda, asdassda das das dad \\nadsasdasda dsa sda sd asd asd asd"},"id":"j18t8xaskrvilrj926ufx4hy","name":"Paragraph","styles":{"color":"#fdfdfd","backgroundPosition":"center","objectFit":"cover","backgroundRepeat":"no-repeat","textAlign":"left","opacity":"100%","fontSize":"1rem","lineHeight":"1.5","marginBottom":"1rem"},"type":"p","category":"Text"}],"id":"__body","name":"Body","styles":{},"type":"__body","category":"Container"}]',
        subdomain: "example",
        createdAt: "2025-05-19T16:56:37.695Z",
        updatedAt: "2025-05-19T17:01:16.438Z",
      };
      if (response.success === false) {
        toast.error("Error", { description: response.msg as string });
        return;
      }

      dispatch({
        type: "LOAD_DATA",
        payload: {
          elements: response.content ? JSON.parse(response?.content) : "",
          withLive: !!liveMode,
        },
      });
    };
    fetchData();
  }, [siteId, dispatch, liveMode]);

  if (isMobile && !liveMode && !state.editor.previewMode) {
    return (
      <div className="flex flex-col gap-4 px-4 absolute z-[101] top-0 w-screen h-screen items-center justify-center">
        <h1 className="text-2xl text-center">
          Whoops! The Framely Website Editor is only available on larger
          devices.
        </h1>
        <Button asChild variant="link" className="group">
          <Link href={getLink({})}>
            <ArrowLeft /> Go Back
          </Link>
        </Button>
      </div>
    );
  }
  const handleClick = () => {
    dispatch({ type: "CHANGE_SELECTED_ELEMENT", payload: {} });
  };

  const handleUnPreview = () => {
    dispatch({ type: "TOGGLE_PREVIEW_MODE" });
    dispatch({ type: "TOGGLE_LIVE_MODE" });
  };

  return (
    <div
      className={`h-full overflow-y-scroll max-w-full overflow-x-clip bg-muted ${
        state.editor.previewMode === false &&
        state.editor.liveMode === false &&
        "max-h-[calc(100vh-65px)]"
      }`}
    >
      <div
        className={clsx(
          "use-animation-zoom-in h-full bg-muted transition-all rounded-none py-12 px-20 w-full flex justify-center relative",
          {
            "!p-0 !m-0 min-w-screen min-h-screen":
              state.editor.previewMode === true ||
              state.editor.liveMode === true,
          }
        )}
        onClick={handleClick}
      >
        <Button
          variant="default"
          size="icon"
          onClick={handleUnPreview}
          className={`absolute top-5 right-5 w-12 h-12 rounded-lg z-[500] shadow-lg flex items-center justify-center transition-all duration-300 transform ${
            state.editor.previewMode
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
        >
          <EyeOff />
        </Button>
        {Array.isArray(state.editor.elements) &&
          state.editor.elements.map((childElement) => (
            <Recursive key={childElement.id} element={childElement} />
          ))}
      </div>
    </div>
  );
}

export default SiteEditor;
