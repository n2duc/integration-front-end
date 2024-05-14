import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import EmployeesTable from "./employees-table";
import { useEffect, useState } from "react";
import EmployeeTableActions from "./employee-table-action";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    // Fetch employees data from API
    const fetchEmployees = async () => {
      const response = await fetch("http://localhost:8080/api/employees");
      const data = await response.json();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <div className="flex items-end justify-between mb-5">
          <Heading
            title={`Employees (${employees.length})`}
            description="Manage employees (Client side table functionalities.)"
          />
          <EmployeeTableActions />
        </div>
        <Separator />
        <EmployeesTable employees={employees} />
      </div>
    </>
  );
};

export default EmployeesPage;