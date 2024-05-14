import { useEffect, useState } from "react";
import BenefitsTable from "./benefits-table";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

const BenefitsPage = () => {
  const [benefits, setBenefits] = useState([]);
  useEffect(() => {
    try {
      const fetchBenefits = async () => {
        const response = await fetch("http://localhost:8080/api/benefits");
        const data = await response.json();
        setBenefits(data);
      };
      fetchBenefits();
    } catch (error) {
      console.error("Error fetching benefits:", error);
    }
  }, []);
  console.log(benefits);
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <div className="flex items-end justify-between mb-5">
          <Heading
            title={`Benefits`}
            description="Manage employees (Client side table functionalities.)"
          />
        </div>
        <Separator />
        <BenefitsTable benefits={benefits} />
      </div>
    </>
  )
}

export default BenefitsPage;