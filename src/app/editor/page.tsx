import EditorProvider from "@/app/providers/editor-provider";
import React, { use } from "react";
import EditorNavigation from "../components/editor/editor-navigation";
import SiteEditor from "@/app/components/editor/site-editor";
import LeftSidebar from "@/app/components/editor/editor-sidebar/left-sidebar";
import RightSidebar from "@/app/components/editor/editor-sidebar/right-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import NotFoundPage from "@/app/[domain]/[slug]/page";
import { Registry } from "@/lib/editor/registry";
import H1Component from "../components/editor/site-editor/editor-components/plugins/h1";

type Props = {
  params: Promise<{
    siteId: string;
  }>;
};

const Page = async ({ params }: Props) => {  
  const session = {
    userId: "user_2",
  };

  const { siteId } = await params;
  const siteDetails = {
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

  // TODO: Display access denied page, add ability for users to request access (?)
  if (!siteDetails || !(session.userId === siteDetails.userId)) {
    return <NotFoundPage />;
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <EditorProvider siteId={siteId} siteDetails={siteDetails}>
        <EditorNavigation siteDetails={siteDetails} />
        <div className="relative flex w-full h-full">
          <div className="flex-shrink-0 relative bg-muted">
            <SidebarProvider>
              <LeftSidebar />
              <SidebarTrigger className="w-12 h-12 ml-2" />
            </SidebarProvider>
          </div>
          <div className="flex-1 p-0 m-0">
            <SiteEditor siteId={siteId} />
          </div>
          <div className="flex-shrink-0">
            <RightSidebar />
          </div>
        </div>
      </EditorProvider>
    </div>
  );
};

export default Page;
