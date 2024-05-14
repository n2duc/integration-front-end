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
import IconDelete from "@/components/icons/IconDelete";
import IconEdit from "@/components/icons/IconEdit";
import IconView from "@/components/icons/IconView";

const TableBenefit = ({
  currentEmployees,
  currentPage,
  newsPerPage,
  setOpenModal,
  setId,
  handleRemoveEmployee = () => {},
}) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead className="w-[100px]">SL No</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Plan Name</TableHead>
            <TableHead>Shareholder</TableHead>
            <TableHead>Deductable</TableHead>
            <TableHead>Percentage Copay</TableHead>
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
                <TableCell>{item.PERSONAL_ID}</TableCell>
                <TableCell>{item["BENEFIT_PLANS.PLAN_NAME"]}</TableCell>
                <TableCell>{item.SHAREHOLDER_STATUS == 1 ? "Shareholder" : "Non-Shareholder"}</TableCell>
                <TableCell>{item.averageDeductable}</TableCell>
                <TableCell>{item.averagePercentageCopay}</TableCell>
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
    </div>
  );
};

export default TableBenefit;