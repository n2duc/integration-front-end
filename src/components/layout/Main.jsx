import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-10">
        <Navbar></Navbar>
        <div className="content col-start-3 col-end-11">
          <Header></Header>
          <Outlet></Outlet> 
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
