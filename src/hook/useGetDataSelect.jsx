import { useEffect, useState } from "react";

export default function useGetDataSelect() {
  const [listPayrates, setListPayrates] = useState([]);
  const [listBenefitPlans, setListBenefitPlans] = useState([]);

  useEffect(() => {
    const fetchPayrates = async () => {
      const response = await fetch("http://localhost:8080/api/data/payrates");
      return response.json();
    };
    const fetchBenefitsPlan = async () => {
      const response = await fetch("http://localhost:8080/api/data/benefits");
      return response.json();
    };
    const payratesList = fetchPayrates();
    const benefitsList = fetchBenefitsPlan();

    Promise.all([payratesList, benefitsList]).then((values) => {
      setListPayrates(values[0]);
      setListBenefitPlans(values[1]);
    });
  }, []);

  return { listPayrates, listBenefitPlans };
}