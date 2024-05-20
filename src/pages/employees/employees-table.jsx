import { CellAction } from "./cell-action";
import EmployeeTableActions from "./employee-table-action";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import PaginationSection from "@/components/shared/pagination-section";
import { useState } from "react";
import usePagination from "@/hook/usePagination";

const EmployeesTable = ({ employees }) => {
  const { currentPosts, setCurrentPage, postsPerPage, currentPage } = usePagination(employees);

  return (
    <>
      {employees && (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">ID</TableHead>
                <TableHead>Full name</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Ethnicity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPosts.map((employee) => {
                const fullName = `${employee.CURRENT_LAST_NAME} ${employee.CURRENT_MIDDLE_NAME} ${employee.CURRENT_FIRST_NAME} `;
                const employmentStatus = employee.EMPLOYMENT_STATUS.replace("-", " ").toLowerCase().replace(/\b\w/g, function(l){ return l.toUpperCase() });
                return (
                  <TableRow key={employee.PERSONAL_ID}>
                    <TableCell className="font-medium">{employee.PERSONAL_ID}</TableCell>
                    <TableCell>{fullName}</TableCell>
                    <TableCell>{employee.CURRENT_GENDER}</TableCell>
                    <TableCell>{employee.CURRENT_PERSONAL_EMAIL}</TableCell>
                    <TableCell>{employee.CURRENT_PHONE_NUMBER}</TableCell>
                    <TableCell>{employee.ETHNICITY}</TableCell>
                    <TableCell>{employmentStatus}</TableCell>
                    <TableCell className="text-right">
                      <CellAction employeeId={employee.PERSONAL_ID} />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          {employees.length > postsPerPage && (
            <PaginationSection 
              totalPosts={employees.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </>
      )}
    </>
  );
};

export default EmployeesTable;
