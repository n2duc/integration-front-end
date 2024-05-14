import { useEffect, useState } from "react";

export default function useGetDataNotice() {
  const [anniversary, setAnniversary] = useState([]);
  const [birthDay, setBirthDay] = useState([]);
  const [vacation, setVacation] = useState([]);

  useEffect(() => {
    try {
      const fetchAnniversary = async () => {
        const response = await fetch("http://localhost:8080/api/alert/anniversary");
        return response.json();
      };
      const fetchBirthDay = async () => {
        const response = await fetch("http://localhost:8080/api/alert/birthday");
        return response.json();
      };
      const fetchVacation = async () => {
        const response = await fetch("http://localhost:8080/api/alert/excess-vacation");
        return response.json();
      }
      const anniversaryList = fetchAnniversary();
      const birthDayList = fetchBirthDay();
      const excessVacationList = fetchVacation();

      Promise.all([anniversaryList, excessVacationList, birthDayList]).then((values) => {
        setAnniversary(values[0]);
        setVacation(values[1]);
        setBirthDay(values[2]);
      });

    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  }, []);

  return { anniversary, vacation, birthDay };
}