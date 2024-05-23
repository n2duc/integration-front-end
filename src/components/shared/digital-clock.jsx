import { useEffect, useState } from "react";

const getDate = () => {
  const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const today = new Date();
  const day = weekdayNames[today.getDay()];
  const date = today.getDate();
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();

  return `${day}, ${date} ${month}, ${year}`;
}

const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(getDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-5 mr-5">
      <p className="">{date}</p>
      <p className="font-medium bg-gray-50 text-gray-700 px-3 py-2 rounded-md w-[120px] text-center tabular-nums">{time}</p>
    </div>
  );
};

export default DigitalClock;
