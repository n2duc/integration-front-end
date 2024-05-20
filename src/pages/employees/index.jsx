import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import EmployeesTable from "./employees-table";
import { useEffect, useState } from "react";
import EmployeeTableActions from "./employee-table-action";

const EmployeesPage = () => {
  // State for the selected gender
  const [selectedGender, setSelectedGender] = useState('all');
  // State for the selected status
  const [selectedStatus, setSelectedStatus] = useState('all');

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

  const handleFilterGender = (value) => setSelectedGender(value);
  const handleFilterStatus = (value) => setSelectedStatus(value);

  const filteredDatas = employees.filter((employee) => {
    return (
      (selectedGender === 'all' || employee.CURRENT_GENDER.toLowerCase() === selectedGender) &&
      (selectedStatus === 'all' || employee.EMPLOYMENT_STATUS.trimEnd().toLowerCase() === selectedStatus)
    )
  })

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <div className="flex items-end justify-between mb-5">
          <Heading
            title={`Employees (${employees.length})`}
            description="Manage employees (Client side table functionalities.)"
          />
          <EmployeeTableActions
            filterGender={handleFilterGender}
            filterStatus={handleFilterStatus}
          />
        </div>
        <Separator />
        <EmployeesTable employees={filteredDatas} />
      </div>
    </>
  );
};

export default EmployeesPage;