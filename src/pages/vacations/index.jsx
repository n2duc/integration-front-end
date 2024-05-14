import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import VacationsTable from "./vacations-table";

const VacationsPage = () => {
  const [vacations, setVacations] = useState([]);
  // Fetch vacations data from API
  useEffect(() => {
    const fetchVacations = async () => {
      const response = await fetch("http://localhost:8080/api/vacations");
      const data = await response.json();
      setVacations(data);
    };
    fetchVacations();
  }, []);

  console.log(vacations);
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <div className="flex items-end justify-between mb-5">
          <Heading
            title="Vacations"
            description="Manage payroll (Client side table functionalities.)"
          />
        </div>
        <Separator />
        <VacationsTable vacations={vacations} />
      </div>
    </>
  );
};

export default VacationsPage;
