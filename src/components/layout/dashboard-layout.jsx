import { useState } from "react";
import Header from "../shared/header";
import Sidebar from "../shared/sidebar";
import MobileSidebar from "../shared/mobile-sidebar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <Sidebar />
        <main className="w-full pt-16">
          <div className="h-full flex-1 bg-background focus:outline-none">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

export default DashboardLayout;