import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import VacationsTable from "./vacations-table";
import VacationsTableAction from "./vacations-table-action";
import { ScrollArea } from "@/components/ui/scroll-area";

const VacationsPage = () => {
  // State for the selected gender
  const [selectedGender, setSelectedGender] = useState('all');
  // State for the selected shareholder
  const [selectedShareholder, setSelectedShareholder] = useState('all');
  // State for the selected status
  const [selectedStatus, setSelectedStatus] = useState('all');

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

  const handleFilterGender = (value) => setSelectedGender(value);
  const handleFilterStatus = (value) => setSelectedStatus(value);
  const handleFilterShareholder = (value) => setSelectedShareholder(value);

  const filteredDatas = vacations.filter((vacation) => {
    const employmentStatus = vacation["EMPLOYMENT.EMPLOYMENT_STATUS"];
    return (
      (selectedGender === 'all' || vacation.CURRENT_GENDER.toLowerCase() === selectedGender) && 
      (selectedShareholder === 'all' || (selectedShareholder === 'shareholder' && vacation.SHAREHOLDER_STATUS) || (selectedShareholder === 'non-shareholder' && !vacation.SHAREHOLDER_STATUS)) &&
      (selectedStatus === 'all' || employmentStatus?.trimEnd().toLowerCase() === selectedStatus)
    )
  });

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <div className="flex items-end justify-between mb-5">
          <Heading
            title="Vacations"
            description="Manage payroll (Client side table functionalities.)"
          />
          <VacationsTableAction 
            filterGender={handleFilterGender}
            filterShareholder={handleFilterShareholder}
            filterStatus={handleFilterStatus}
          />
        </div>
        <Separator />
        <VacationsTable vacations={filteredDatas} />
      </div>
    </ScrollArea>
  );
};

export default VacationsPage;
