import { Modal } from "@/components/ui/modal";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import axios from "axios";
import { useEffect, useState } from "react";

const EmployeeDetail = ({ isOpen, onClose, employeeId }) => {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    try {
      const fetchEmployee = async () => {
        const response = await axios.get(`http://localhost:8080/api/employees/${employeeId}`);
        setEmployee(response.data);
      }
      fetchEmployee();
    } catch (error) {
      console.error("Error fetching employee:", error);
    }
  }, [employeeId]);

  const { jobHistory, payrates } = employee;
  const fullName = `${employee?.lastname} ${employee?.firstname}`;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={'!bg-background !px-1 min-w-[1120px]'}
        title={`Employee Detail: ${fullName}`}
        description={`View employee detail`}
      >
        <ScrollArea className="h-[75dvh] px-6">
          <h2 className="font-medium text-gray-800 mb-1">Personal Infomation</h2>
          <div className="bg-green-50 grid grid-cols-2 gap-x-6 gap-y-2 p-3 rounded text-sm">
            <TextField label="First name" value={employee?.firstname} />
            <TextField label="Last name" value={employee?.lastname} />
            <TextField label="Gender" value={employee?.gender} />
            <TextField label="Birth Day" value={employee?.birthDay} />
            <TextField label="Ethnicity" value={employee?.ethnicity} />
            <TextField label="Social Security Number" value={employee?.ssNumber} />
            <TextField label="Email" value={employee?.email} />
            <TextField label="Phone Number" value={employee?.phoneNumber} />
            <TextField label="Driver License" value={employee?.driverLicense} />
            <TextField label="Address 1" value={employee?.address1} />
            <TextField label="Address 2" value={employee?.address2} />
            <TextField label="City" value={employee?.city} />
            <TextField label="Zip Code" value={employee?.zipCode} />
            <TextField label="Country" value={employee?.country} />
            <TextField label="Marital Status" value={employee?.maritalStatus} />
          </div>
          <h2 className="font-medium text-gray-800 mt-4 mb-1">Employment</h2>
          <div className="bg-gray-50 grid grid-cols-2 gap-x-6 gap-y-2 p-3 rounded text-sm">
            <TextField label="Payrate Name" value={payrates?.payRateName} />
            <TextField label="Value" value={payrates?.Value} />
            <TextField label="Tax Percentage" value={payrates?.taxPercentage} />
            <TextField label="Pay Amount" value={payrates?.payAmount} />
            <TextField label="Workers Comp Code" value={employee?.WORKERS_COMP_CODE} />
            <TextField label="Vacation Day" value={employee?.vacationDays} />
            <TextField label="Vacation Day" value={employee?.hireDate} />
            <TextField label="Vacation Day" value={employee?.employmentStatus} />
          </div>
          <h2 className="font-medium text-gray-800 mt-4 mb-1">Job History</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="h-10">Job Title</TableHead>
                <TableHead className="h-10">Department</TableHead>
                <TableHead className="h-10">Start Date</TableHead>
                <TableHead className="h-10">End Date</TableHead>
                <TableHead className="h-10">Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobHistory?.map((job) => (
                <TableRow key={job.JOB_HISTORY_ID}>
                  <TableCell className="py-2">{job.JOB_TITLE}</TableCell>
                  <TableCell className="py-2">{job.DEPARTMENT}</TableCell>
                  <TableCell className="py-2">{job.FROM_DATE}</TableCell>
                  <TableCell className="py-2">{job.THRU_DATE}</TableCell>
                  <TableCell className="py-2">{job.LOCATION}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </Modal>
    </>
  )
};

const TextField = ({ label, value }) => {
  return (
    <p><span className="font-medium text-gray-800 mr-1">{label}:</span> {value}</p>
  )
};

export default EmployeeDetail;
