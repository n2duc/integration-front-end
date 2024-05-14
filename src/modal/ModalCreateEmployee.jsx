import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const ModalCreateEmployee = ({ open = false, handleClose = () => {} }) => {
  const [formData, setFormData] = useState({
    ID: "",
    firstName: "",
    lastName: "",
    middleInitial: "",
    address: "",
    state: "",
    zip: "",
    email: "",
    phoneNumber: "",
    socialSecurityNumber: "",
    driversLicense: "",
    maritalStatus: "",
    gender: "",
    shareholderStatus: "",
    benefitPlans: "",
    ethnicity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission with formData
    console.log(formData);
    // Reset form data or close modal as needed
    setFormData({
      ID: "",
      firstName: "",
      lastName: "",
      middleInitial: "",
      address: "",
      state: "",
      zip: "",
      email: "",
      phoneNumber: "",
      socialSecurityNumber: "",
      driversLicense: "",
      maritalStatus: "",
      gender: "",
      shareholderStatus: "",
      benefitPlans: "",
      ethnicity: "",
    });
    handleClose();
  };

  if (!open) return null;
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
          <h1 className="font-bold text-xl ml-3 text-white">Create employee</h1>
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
          <FieldItem
            name={"ID"}
            type={"text"}
            onChange={handleChange}
            value={formData.ID}
          ></FieldItem>
          <FieldItem
            name={"firstName"}
            type={"text"}
            onChange={handleChange}
            value={formData.firstName}
          ></FieldItem>
          <FieldItem
            name={"lastName"}
            type={"text"}
            onChange={handleChange}
            value={formData.lastName}
          ></FieldItem>
          <FieldItem
            name={"middleInitial"}
            type={"text"}
            onChange={handleChange}
            value={formData.middleInitial}
          ></FieldItem>
          <FieldItem
            name={"address"}
            type={"text"}
            onChange={handleChange}
            value={formData.address}
          ></FieldItem>
          <FieldItem
            name={"state"}
            type={"text"}
            onChange={handleChange}
            value={formData.state}
          ></FieldItem>
          <FieldItem
            name={"zip"}
            type={"text"}
            onChange={handleChange}
            value={formData.zip}
          ></FieldItem>
          <FieldItem
            name={"email"}
            type={"text"}
            onChange={handleChange}
            value={formData.email}
          ></FieldItem>
          <FieldItem
            name={"phoneNumber"}
            type={"number"}
            onChange={handleChange}
            value={formData.phoneNumber}
          ></FieldItem>
          <FieldItem
            name={"socialSecurityNumber"}
            type={"number"}
            onChange={handleChange}
            value={formData.socialSecurityNumber}
          ></FieldItem>
          <FieldItem
            name={"driversLicense"}
            type={"text"}
            onChange={handleChange}
            value={formData.driversLicense}
          ></FieldItem>
          <FieldItem
            name={"maritalStatus"}
            type={"text"}
            onChange={handleChange}
            value={formData.maritalStatus}
          ></FieldItem>
          <FieldItem
            name={"gender"}
            type={"text"}
            onChange={handleChange}
            value={formData.gender}
          ></FieldItem>
          <FieldItem
            name={"shareholderStatus"}
            type={"text"}
            onChange={handleChange}
            value={formData.shareholderStatus}
          ></FieldItem>
          <FieldItem
            name={"benefitPlans"}
            type={"text"}
            onChange={handleChange}
            value={formData.benefitPlans}
          ></FieldItem>
          <FieldItem
            name={"ethnicity"}
            type={"text"}
            onChange={handleChange}
            value={formData.ethnicity}
          ></FieldItem>
        </div>
        <div className="flex justify-center">
          <button
            className="py-2 px-10 bg-black rounded-lg font-semibold text-xl text-center text-white mb-5 mt-5"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

const FieldItem = ({ name, type, onChange, value }) => {
  return (
    <div className="border-b-[1px] max-w-[500px] items-center">
      <span className="font-semibold">{name}</span>
      <input
        type={type}
        name={name}
        value={value}
        className="w-full outline-blue-500 border py-1 px-2 mb-1 rounded-md"
        onChange={onChange}
      />
    </div>
  );
};

ModalCreateEmployee.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default ModalCreateEmployee;
