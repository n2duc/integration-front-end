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

const BenefitsTable = ({ benefits }) => {
  return (
    <>
      {benefits && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">ID</TableHead>
              <TableHead>Full name</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Shareholder Status</TableHead>
              <TableHead>Benefit Plan</TableHead>
              <TableHead>Benefit AVG</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {benefits.map((benefit) => {
              const fullName = `${benefit.CURRENT_FIRST_NAME} ${benefit.CURRENT_MIDDLE_NAME} ${benefit.CURRENT_LAST_NAME}`;
              const shareholderStatus = benefit.SHAREHOLDER_STATUS ? "Shareholder" : "Non-shareholder";
              const benefitAvg = benefit.averageDeductable * (100 - benefit.averagePercentageCopay) / 100;
              return (
                <TableRow key={benefit.PERSONAL_ID}>
                  <TableCell className="font-medium">{benefit.PERSONAL_ID}</TableCell>
                  <TableCell>{fullName}</TableCell>
                  <TableCell>{benefit.CURRENT_GENDER}</TableCell>
                  <TableCell>{shareholderStatus}</TableCell>
                  <TableCell>{benefit["BENEFIT_PLANS.PLAN_NAME"]}</TableCell>
                  <TableCell>{benefitAvg}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </>
  )
};

export default BenefitsTable;
