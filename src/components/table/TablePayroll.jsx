import React from "react";
import IconDelete from "@/components/icons/IconDelete";
import IconEdit from "@/components/icons/IconEdit";
import IconView from "@/components/icons/IconView";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TablePayroll = ({
  currentEmployees,
  currentPage,
  newsPerPage,
  setOpenModal,
  setId,
  handleRemoveEmployee = () => {},
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="font-bold">
          <TableHead className="w-[100px]">SL No</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Payroll</TableHead>
          <TableHead>Tax</TableHead>
          <TableHead>Net salarys</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {currentEmployees.length > 0 &&
          currentEmployees.map((item, index) => (
            <TableRow className="list-employee" key={item.id}>
              <TableCell>
                {index + 1 + (currentPage - 1) * newsPerPage}
              </TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.department}</TableCell>
              <TableCell>{item.payroll}</TableCell>
              <TableCell>{item.tax}%</TableCell>
              <TableCell>{item.net_salary}</TableCell>
              <TableCell className="flex items-center justify-center gap-4">
                <IconView
                  onClick={() => {
                    setOpenModal(true);
                    setId(() => item.id);
                  }}
                ></IconView>
                <IconDelete></IconDelete>
                <IconEdit></IconEdit>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default TablePayroll;
