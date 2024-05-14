import React from "react";
import ReactDOM from "react-dom";

const Modal = ({
  open = false,
  handleClose = () => {},
  name,
  handleNameChange,
  type,
  handleTypeChange,
  message,
  handleMessageChange,
  handleSendClick,
}) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#7a7a7a] bg-opacity-75 backdrop-filter backdrop-blur-xl z-50 ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-white bg-opacity-25 overlay"
        onClick={handleClose}
      ></div>
      <div className="relative bg-white p-8 rounded-lg shadow-2xl">
        <div className="w-[582px] h-[319px] border-[1px] border-[#c0c0c0] rounded-[10px]">
          <div className="flex h-[50px] bg-[#000] justify-center items-center rounded-t-[8px]">
            <span className="text-[#fff] font-semibold ">
              Create New Notification & Alert
            </span>
          </div>
          <div className="mx-[26px]">
            <div className="relative flex gap-[20px]  mt-[34px] ">
              <input
                type="text"
                placeholder="Name employee"
                className="pl-3 py-2 px-4 border-[1px] border-[#E3E3E3] rounded-[8px] w-[268px]  text-black h-[40px] outline-none"
                value={name}
                onChange={handleNameChange}
              />

              <select
                className="pl-3 py-2 px-4 border-[1px] border-[#E3E3E3] rounded-[8px] w-[240px]  text-black h-[40px] "
                value={type}
                onChange={handleTypeChange}
              >
                <option value="" hidden>
                  Select notification type
                </option>
                <option value="anniversary">Anniversary Reminders</option>
                <option value="exceeded">Exceeded Vacation Days</option>
                <option value="benefits">Benefits Plan Changes</option>
                <option value="birthday">Birthday Notifications</option>
              </select>
            </div>
            <div className="mt-[22px] mb-[8px] font-semibold">
              <p>Your message</p>
              <input
                type="text"
                placeholder="Type your message here"
                className="mt-2 pl-3 pt-[0px] border-[1px] border-[#E3E3E3] rounded-[8px] w-[100%]  text-black h-[80px] outline-none"
                value={message}
                onChange={handleMessageChange}
              />
            </div>
            <button
              className="w-[100%] h-[40px] bg-[#000] text-[#fff] font-semibold rounded-[8px]"
              onClick={handleSendClick}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
