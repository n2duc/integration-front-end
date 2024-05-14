import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const ModalEmployee = ({ open = false, handleClose = () => {}, item }) => {
  if (!open || !item) return null;
  const {
    id,
    fist_Name,
    last_Name,
    middle_Initial,
    address,
    city,
    state,
    zip,
    email,
    phone_Number,
    social_Security_Number,
    driver_License,
    marital_Status,
    gender,
    sharehoder_Status,
    benefit_Plans,
    ethnicity,
  } = item;
  console.log(item);

  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#7a7a7a] bg-opacity-55 backdrop-filter backdrop-blur-xl z-50 ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-white bg-opacity-25 overlay"
        onClick={handleClose}
      ></div>
      <div className="relative w-[800px] h-auto rounded-xl bg-white z-9999">
        <div className="flex border-b-[1px] justify-center items-center h-[80px]  bg-black rounded-t-lg relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[30px] h-[30px] text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <h1 className="font-bold text-xl ml-3 text-white">
            Employee Detail Infomation
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[30px] h-[30px] text-white absolute top-[6px] right-[5px] cursor-pointer"
            onClick={handleClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="text-base p-3 grid gap-2 gap-x-5 grid-cols-2">
          <FieldItem name={"Id:"} children={id}></FieldItem>
          <FieldItem name={"First name:"} children={fist_Name}></FieldItem>
          <FieldItem name={"Last name:"} children={last_Name}></FieldItem>
          <FieldItem
            name={"Middle initial:"}
            children={middle_Initial}
          ></FieldItem>
          <FieldItem name={"Address:"} children={address}></FieldItem>
          <FieldItem name={"City:"} children={city}></FieldItem>
          <FieldItem name={"State:"} children={state}></FieldItem>
          <FieldItem name={"Zip:"} children={zip}></FieldItem>
          <FieldItem name={"Email:"} children={email}></FieldItem>
          <FieldItem name={"Phone number:"} children={phone_Number}></FieldItem>
          <FieldItem
            name={"Social security number:"}
            children={social_Security_Number}
          ></FieldItem>
          <FieldItem
            name={"Drivers license:"}
            children={driver_License}
          ></FieldItem>
          <FieldItem
            name={"Marital Status:"}
            children={marital_Status}
          ></FieldItem>
          <FieldItem name={"Gender:"} children={gender}></FieldItem>
          <FieldItem
            name={"Shareholder Status:"}
            children={sharehoder_Status}
          ></FieldItem>
          <FieldItem
            name={"Benefit plans:"}
            children={benefit_Plans}
          ></FieldItem>
          <FieldItem name={"Ethnicity:"} children={ethnicity}></FieldItem>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

const FieldItem = ({ name, children }) => {
  return (
    <div className="flex border-b-[1px] py-2 gap-2 max-w-[500px] items-center">
      <span className="font-semibold">{name}</span>
      <span className="break-words">{children}</span>
    </div>
  );
};

ModalEmployee.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.number,
    first_Name: PropTypes.string,
    last_Name: PropTypes.string,
    middle_Initial: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    email: PropTypes.string,
    phone_Number: PropTypes.string,
    social_Security_Number: PropTypes.number,
    driver_License: PropTypes.string,
    marital_Status: PropTypes.string,
    gender: PropTypes.string,
    shareholder_Status: PropTypes.string,
    benefit_Plans: PropTypes.string,
    ethnicity: PropTypes.string,
  }),
};

export default ModalEmployee;
