import React, { useEffect, useState } from "react";
import iconSearch from "../../img/search.svg";
import iconNotification from "../../img/notification.svg";
import { fetcher, tmdbAPI } from "@/config";
import useDebounce from "@/hook/useDebounce";
import useSWR from "swr";

const Header = () => {
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(tmdbAPI.getAPI("employee"));
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getAPI("employee"));
    }
  }, [filterDebounce]);
  const employee = data || [];
  return (
    <div className="h-20 border-b-2 border-b-#D7D7D7 flex justify-end items-center">
      <div className="flex items-center relative">
        <img src={iconSearch} alt="" className="absolute ml-4 h-4 w-4" />
        <input
          type="text"
          placeholder="Search"
          className="pl-12 py-2 px-4 border outline-none rounded-3xl w-[350px] bg-[#E3E3E3] text-black h-[40px]"
          onChange={handleFilterChange}
        />
      </div>
      <div className="p-3 bg-[#E3E3E3] mr-14 ml-24 rounded-lg h-10 w-10 flex justify-center items-center cursor-pointer">
        <img src={iconNotification} alt="" />
      </div>
    </div>
  );
};

export default Header;
