import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import DigitalClock from "./digital-clock";
import MobileSidebar from "./mobile-sidebar";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
    <nav className="h-16 flex items-center justify-between px-4">
      <div className="hidden lg:block">
        <Link
          to={'/'}
          className="flex items-center gap-4"
        >
          <img src="/logo.png" className="ml-4 h-8 w-8" alt="logo image" title="logo image" />
          <div className="flex flex-col items-start">
            <span className="text-lg font-semibold leading-none">MineChain</span>
            <span className="text-sm">HR & Payroll Dashboard</span>
          </div>
        </Link>
      </div>
      <div className={cn("block lg:!hidden")}>
        <MobileSidebar />
      </div>

      <div className="flex items-center gap-5">
        <DigitalClock />
        {/* <Link
          to='/notifications'
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
        >
          <Bell className="w-5 h-5" />
        </Link> */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to='/notifications'
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
              >
                <Bell className="w-5 h-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden">
          <img src="/meow.jpg" alt="avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Header;