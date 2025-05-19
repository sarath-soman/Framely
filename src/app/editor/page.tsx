import EditorProvider from "@/app/providers/editor-provider";
import React, { use } from "react";
import EditorNavigation from "../components/editor/editor-navigation";
import SiteEditor from "@/app/components/editor/site-editor";
import LeftSidebar from "@/app/components/editor/editor-sidebar/left-sidebar";
import RightSidebar from "@/app/components/editor/editor-sidebar/right-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import NotFoundPage from "@/app/[domain]/[slug]/page";

type Props = {
  params: Promise<{
    siteId: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const session = {
    userId: "user_2",
  }

  const { siteId } = await params;
  const siteDetails = {
      userId: "user_2",
      id: siteId,
      title: "Hello World!",
      subdomain: "gbg",
      previewImage: "",
      content: {},
      visible: true,
    }

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
