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
import { CellAction } from "./cell-action";

const PayrollTable = ({ data }) => {
  return (
    <>
      {data && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">ID</TableHead>
              <TableHead>Full name</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Shareholder</TableHead>
              <TableHead>Ethnicity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-left w-[160px]">Incomes</TableHead>
              {/* <TableHead className="text-right">Action</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => {
              const fullName = `${item.lastName} ${item.firstName}`;
              const employmentStatus = item.info.EMPLOYMENT_STATUS.replace("-", " ").toLowerCase().replace(/\b\w/g, function(l){ return l.toUpperCase() });
              return (
                <TableRow key={item.idEmployee}>
                  <TableCell className="font-medium">{item.idEmployee}</TableCell>
                  <TableCell>{fullName}</TableCell>
                  <TableCell>{item.info.CURRENT_GENDER}</TableCell>
                  <TableCell>{item.info.SHAREHOLDER_STATUS ? "Yes" : "No"}</TableCell>
                  <TableCell>{item.info.ETHNICITY}</TableCell>
                  <TableCell>{employmentStatus}</TableCell>
                  <TableCell className="text-left w-[160px]">{`$${item.totalIncome}`}</TableCell>
                  {/* <TableCell className="text-right">
                    <CellAction />
                  </TableCell> */}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </>
  )
}

export default PayrollTable;