import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import IconView from "../icons/IconView";
import IconDelete from "../icons/IconDelete";
import IconEdit from "../icons/IconEdit";

const TableEmployee = ({
  currentEmployees,
  currentPage,
  newsPerPage,
  setOpenModal,
  setId,
  handleRemoveEmployee = () => {},
}) => {
  return (
    <div className="pt-10 pb-10">
      <Table>
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead className="w-[100px]">SL No</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Day off</TableHead>
            <TableHead>Payrate</TableHead>
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
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.day_off}</TableCell>
                <TableCell>{item.payrate}%</TableCell>
                <TableCell className="flex items-center justify-center gap-4">
                  <IconView
                    onClick={() => {
                      setOpenModal(true);
                      setId(() => item.id);
                    }}
                  ></IconView>
                  <IconDelete
                    onClick={() => handleRemoveEmployee(item.id)}
                  ></IconDelete>
                  <IconEdit></IconEdit>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableEmployee;
