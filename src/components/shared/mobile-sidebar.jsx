import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import DashboardNav from "./dashboard-nav";
import { navItems } from "@/constants/data";

export default function MobileSidebar({ setSidebarOpen, sidebarOpen }) {
  return (
    <>
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="bg-background !px-0">
          <div className="space-y-4 py-4">
            <div className="space-y-4 px-3 py-2">
              <Link to="/" className="py-2 text-2xl font-bold text-white ">
                Logo
              </Link>
              <div className="space-y-1 px-2">
                <DashboardNav items={navItems} setOpen={setSidebarOpen} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
