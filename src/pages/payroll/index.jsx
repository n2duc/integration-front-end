import { Heading } from "@/components/ui/heading";
import PayrollTableAction from "./payroll-table-action";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import PayrollTable from "./payroll-table";
import { ScrollArea } from "@/components/ui/scroll-area";

const PayrollPage = () => {
  const [payrolls, setPayrolls] = useState([]);

  // State for the selected gender
  const [selectedGender, setSelectedGender] = useState('all');
  // State for the selected shareholder
  const [selectedShareholder, setSelectedShareholder] = useState('all');
  // State for the selected status
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    try {
      const fetchPayrolls = async () => {
        const response = await fetch("http://localhost:8080/api/incomes");
        const data = await response.json();
        setPayrolls(data);
      };
      fetchPayrolls();
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  }, []);

  const handleFilterGender = (value) => setSelectedGender(value);
  const handleFilterStatus = (value) => setSelectedStatus(value);
  const handleFilterShareholder = (value) => setSelectedShareholder(value);

  const filteredDatas = payrolls.filter((payroll) => {
    return (
      (selectedGender === 'all' || payroll.info.CURRENT_GENDER.toLowerCase() === selectedGender) && 
      (selectedShareholder === 'all' || (selectedShareholder === 'shareholder' && payroll.info.SHAREHOLDER_STATUS) || (selectedShareholder === 'non-shareholder' && !payroll.info.SHAREHOLDER_STATUS)) &&
      (selectedStatus === 'all' || payroll.info.EMPLOYMENT_STATUS.trimEnd().toLowerCase() === selectedStatus)
    )
  })

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <div className="flex items-end justify-between mb-5">
          <Heading
            title="Payroll"
            description="Manage payroll (Client side table functionalities.)"
          />
          <PayrollTableAction 
            filterGender={handleFilterGender}
            filterShareholder={handleFilterShareholder}
            filterStatus={handleFilterStatus}
          />
        </div>
        <Separator />
        <PayrollTable data={filteredDatas} />
      </div>
    </ScrollArea>
  )
}

export default PayrollPage;