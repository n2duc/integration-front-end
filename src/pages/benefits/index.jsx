import { useEffect, useState } from "react";
import BenefitsTable from "./benefits-table";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import BenefitsTableActions from "./benefits-table-action";
import { ScrollArea } from "@/components/ui/scroll-area";

const BenefitsPage = () => {
  // State for the selected gender
  const [selectedGender, setSelectedGender] = useState('all');
  // State for the selected shareholder
  const [selectedShareholder, setSelectedShareholder] = useState('all');

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
  
  const handleFilterGender = (value) => setSelectedGender(value);
  const handleFilterShareholder = (value) => setSelectedShareholder(value);

  const filteredDatas = benefits.filter((benefit) => {
    return (
      (selectedGender === 'all' || benefit.CURRENT_GENDER.toLowerCase() === selectedGender) && 
      (selectedShareholder === 'all' || (selectedShareholder === 'shareholder' && benefit.SHAREHOLDER_STATUS) || (selectedShareholder === 'non-shareholder' && !benefit.SHAREHOLDER_STATUS))
    )
  })

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <div className="flex items-end justify-between mb-5">
          <Heading
            title={`Benefits`}
            description="Manage employees (Client side table functionalities.)"
          />
          <BenefitsTableActions 
            filterGender={handleFilterGender}
            filterShareholder={handleFilterShareholder}
            data={benefits}
          />
        </div>
        <Separator />
        <BenefitsTable benefits={filteredDatas} />
      </div>
    </ScrollArea>
  )
}

export default BenefitsPage;