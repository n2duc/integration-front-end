import { Icons } from "../ui/icons";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const DashboardNavItem = ({ item, setOpen }) => {
  const Icon = Icons[item.icon];
  return (
    <div
      className="space-y-3"
      key={item.href}
      onClickCapture={() => {
        if (setOpen) {
          setOpen(false);
        }
      }}
    >
      <NavLink
        className={({ isActive }) =>
          cn(
            "group flex items-center rounded-md px-3 py-3 text-base font-medium hover:bg-gray-200 hover:text-accent-foreground",
            isActive ? "bg-gray-100" : "transparent",
          )
        }
        to={item.href}
        end
      >
        <Icon className="mr-3 h-5 w-5" aria-hidden="true" />
        <span>{item.label}</span>
      </NavLink>
    </div>
  );
};

export default function DashboardNav({ items, setOpen }) {
  if (!items?.length) {
    return null;
  }
  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => (
        <DashboardNavItem key={item.href} item={item} setOpen={setOpen} />
      ))}
    </nav>
  );
}