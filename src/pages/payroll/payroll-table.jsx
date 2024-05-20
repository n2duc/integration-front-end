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
import { Badge } from "@/components/ui/badge"
import { CellAction } from "./cell-action";
import PaginationSection from "@/components/shared/pagination-section";
import { useState } from "react";
import usePagination from "@/hook/usePagination";

const PayrollTable = ({ data }) => {
  const { currentPosts, setCurrentPage, postsPerPage, currentPage } = usePagination(data);

  return (
    <>
      {data && (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">ID</TableHead>
                <TableHead>Full name</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Shareholder</TableHead>
                <TableHead>Ethnicity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Department</TableHead>
                <TableHead className="text-left w-[160px]">Incomes</TableHead>
                {/* <TableHead className="text-right">Action</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPosts.map((item) => {
                const fullName = `${item.lastName} ${item.firstName}`;
                const employmentStatus = item.info.EMPLOYMENT_STATUS.replace("-", " ").toLowerCase().replace(/\b\w/g, function(l){ return l.toUpperCase() });
                return (
                  <TableRow key={item.idEmployee}>
                    <TableCell className="font-medium">{item.idEmployee}</TableCell>
                    <TableCell>{fullName}</TableCell>
                    <TableCell>{item.info.CURRENT_GENDER}</TableCell>
                    <TableCell><Badge variant={item.info.SHAREHOLDER_STATUS ? "secondary" : "destructive"}>{item.info.SHAREHOLDER_STATUS ? "Yes" : "No"}</Badge></TableCell>
                    <TableCell>{item.info.ETHNICITY}</TableCell>
                    <TableCell>{employmentStatus}</TableCell>
                    <TableCell>{item.info?.JOB_HISTORY?.DEPARTMENT}</TableCell>
                    <TableCell className="text-left w-[160px]">{`$${item.totalIncome}`}</TableCell>
                    {/* <TableCell className="text-right">
                      <CellAction />
                    </TableCell> */}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          {data.length > postsPerPage && (
            <PaginationSection 
              totalPosts={data.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </>
      )}
    </>
  )
}

export default PayrollTable;