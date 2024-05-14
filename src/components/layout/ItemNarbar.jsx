import React from "react";
import { NavLink } from "react-router-dom";

const ItemNarbar = ({ src, chidlren, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "bg-slate-300 flex gap-5 rounded-md items-center cursor-pointer hover:bg-slate-200 w-full p-3"
          : "flex gap-5 rounded-md items-center cursor-pointer hover:bg-slate-200 w-full p-3"
      }
    >
      <img src={src} alt="" className="w-5 h-5" />
      <span className="text-ms font-medium text-[16px]">{chidlren}</span>
    </NavLink>
  );
};

export default ItemNarbar;
