import { Heading } from "@/components/ui/heading";
import PayrollTableAction from "./payroll-table-action";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import PayrollTable from "./payroll-table";

const PayrollPage = () => {
  const [payrolls, setPayrolls] = useState([]);
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

  console.log(payrolls);
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <div className="flex items-end justify-between mb-5">
          <Heading
            title="Payroll"
            description="Manage payroll (Client side table functionalities.)"
          />
          <PayrollTableAction />
        </div>
        <Separator />
        <PayrollTable data={payrolls} />
      </div>
    </>
  )
}

export default PayrollPage;