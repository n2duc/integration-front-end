import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import DigitalClock from "./digital-clock";

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
            <span className="text-lg font-semibold leading-none">MineChen</span>
            <span className="text-sm">HR & Payroll Dashboard</span>
          </div>
        </Link>
      </div>
      <div className={cn("block lg:!hidden")}>
        {/* <MobileSidebar /> */}
      </div>

      <div className="flex items-center gap-5">
        <DigitalClock />
        <div className="w-8 h-8 rounded-full bg-gray-500"></div>
      </div>
    </nav>
  </div>
  )
}

export default Header;