import React, { Fragment, useEffect, useState } from "react";
import ItemAlert from "@/components/alert/Alert";
import TitleContent from "@/components/titleContent/TitleContent";
import Modal from "@/modal/Modal";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/config";

const NotificationPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data } = useSWR(tmdbAPI.getAPI("notification"), fetcher);
  const alertItem = data || [];
  console.log(alertItem);
  const [id, setId] = useState(alertItem.length + 1);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSendClick = () => {
    const newNotification = {
      id: id,
      name: name,
      message: message,
      type: type,
    };
    alertItem.push(newNotification);
    setId("");
    setName("");
    setMessage("");
    setType("");
  };
  console.log(alertItem);

  // remove item alert
  const [updatedAlerts, setUpdatedAlerts] = useState(alertItem);

  // useEffect(() => {
  //   setUpdatedAlerts(alertItem);
  // }, [alertItem]);
  // console.log(updatedAlerts);

  const handleRemoveAlert = (itemId) => {
    const filteredAlerts = updatedAlerts.filter((item) => item.id !== itemId);
    setUpdatedAlerts(filteredAlerts);
  };

  return (
    <Fragment>
      <div className="py-7 px-10">
        <div className="flex justify-between items-center">
          <TitleContent
            mainChildren={"Payroll"}
            minorCirldren={"Memo / Payroll"}
          ></TitleContent>
          <button
            className="h-[35px] bg-[#000] text-[#fff] mr-[100px] px-[20px] rounded-[8px] font-semibold"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Create Alert
          </button>
        </div>
        <div className="grid gap-5 grid-cols-2">
          <ItemAlert
            nameAlert={"Anniversary Reminders"}
            type={"anniversary"}
          ></ItemAlert>
          <ItemAlert
            nameAlert={"Exceeded Vacation Days"}
            type={"exceeded"}
          ></ItemAlert>
          <ItemAlert
            nameAlert={"Benefits Plan Changes"}
            type={"benefit"}
          ></ItemAlert>
          <ItemAlert
            nameAlert={"Birthday Notifications"}
            type={"birthday"}
          ></ItemAlert>
        </div>
        <Modal
          open={openModal}
          handleClose={() => {
            setOpenModal(false);
          }}
          name={name}
          handleNameChange={handleNameChange}
          type={type}
          handleTypeChange={handleTypeChange}
          message={message}
          handleMessageChange={handleMessageChange}
          handleSendClick={handleSendClick}
        ></Modal>
      </div>
    </Fragment>
  );
};

export default NotificationPage;
