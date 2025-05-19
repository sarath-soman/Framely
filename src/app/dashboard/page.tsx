import React from "react";
import AppSidebar from "../components/dashboard/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Dashboard = async () => {
  return (
    <SidebarProvider>
      <div className="flex w-screen h-screen">
        <AppSidebar />
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
