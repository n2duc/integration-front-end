import React, { useState } from "react";
import iconDashboard from "../../img/dashboard.svg";
import iconBenefit from "../../img/benefit.svg";
import iconEmployee from "../../img/employee.svg";
import iconPayroll from "../../img/bitcion.svg";
import iconNotification from "../../img/notification.svg";
import ItemNarbar from "./ItemNarbar";
import iconMenu from "../../img/menu.svg";

const Navbar = () => {
  return (
    <div className="menu relative col-start-1 col-end-3 border border-r-2 border-r-#D7D7D7 h-full p-10">
      <div className="flex gap-5 items-center mb-20">
        <div className="item">
          <h2 className="font-semibold text-[16px] ">MEMO Dashboard</h2>
          <span className="text-ms font-medium text-[12px]">HR & Payroll</span>
        </div>
      </div>
      <div className="gap-5 inline-block w-full">
        <ItemNarbar
          to={"/"}
          src={iconDashboard}
          chidlren="Dashboard"
        ></ItemNarbar>
        <ItemNarbar
          to={"/employee"}
          src={iconEmployee}
          chidlren="Employee"
        ></ItemNarbar>
        <ItemNarbar
          to={"/payroll"}
          src={iconPayroll}
          chidlren="Payroll"
        ></ItemNarbar>
        <ItemNarbar
          to={"/notification"}
          src={iconNotification}
          chidlren="Notification"
        ></ItemNarbar>
        <ItemNarbar
          to={"/benefit"}
          src={iconBenefit}
          chidlren="Benefit"
        ></ItemNarbar>
      </div>
      <div
        className="absolute top-5 -right-5 p-3 bg-[#E3E3E3] rounded-lg cursor-pointer"
        // onClick={toggleMenu}
      >
        <img src={iconMenu} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
