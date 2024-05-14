import React, { useEffect, useState } from "react";
import iconRecyle from "../../img/recycle.svg";
import iconBookmark from "../../img/bookmark.svg";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/config";

const ItemAlert = ({ nameAlert, type }) => {
  const { data } = useSWR(tmdbAPI.getAPI("notification"), fetcher);
  const alertItem = data || [];
  const [updatedAlerts, setUpdatedAlerts] = useState(alertItem);

  useEffect(() => {
    setUpdatedAlerts(alertItem);
  }, [alertItem]);
  // console.log(updatedAlerts);

  const handleRemoveAlert = (itemId) => {
    const filteredAlerts = updatedAlerts.filter((item) => item.id !== itemId);
    setUpdatedAlerts(filteredAlerts);
  };

  return (
    <div className="w-full mt-7 border-[1px] border-[#c0c0c0] rounded-[10px] ">
      <h1 className=" bg-[#000] text-[#fff] text-l font-semibold px-[30px] py-[8px] rounded-tl-[10px] rounded-br-[30px] max-w-[250px]">
        {nameAlert}
      </h1>
      <div className=" h-[275px] overflow-auto mt-5 mx-6 mb-5">
        {updatedAlerts.length > 0 &&
          updatedAlerts.map((item) =>
            type === item.type ? (
              <div
                className="flex gap-1 items-center border-[1px] border-[#c0c0c0] rounded-[6px] px-3 justify-between mb-3"
                key={item.id}
              >
                <img src={iconBookmark} alt="" />
                <div className="p-2 max-h-[120px] overflow-hidden max-w-[88%] w-full">
                  <div className="flex items-center justify-between">
                    <h2 className="text-l font-medium ">{item.name}</h2>
                    <div className="text-l">{"time"}</div>
                  </div>
                  <div className="text-justify ">
                    <p className=" text-sm line-clamp-4">{item.message}</p>
                  </div>
                </div>
                <img
                  src={iconRecyle}
                  alt=""
                  className="cursor-pointer"
                  onClick={() => handleRemoveAlert(item.id)}
                />
              </div>
            ) : null
          )}
      </div>
    </div>
  );
};

export default ItemAlert;
