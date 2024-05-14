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

const VacationsTable = ({ vacations }) => {
  return (
    <>
      {vacations && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">ID</TableHead>
              <TableHead>Full name</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Shareholder</TableHead>
              <TableHead>Ethnicity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-left w-[200px]">Current Years (days)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vacations.map((vacation) => {
              const fullName = `${vacation.CURRENT_FIRST_NAME} ${vacation.CURRENT_MIDDLE_NAME} ${vacation.CURRENT_LAST_NAME}`;
              const employmentStatus = vacation["EMPLOYMENT.EMPLOYMENT_STATUS"];
              // const newStatus = employmentStatus.replace("-", " ").toLowerCase().replace(/\b\w/g, function(l){ return l.toUpperCase() })
              return (
                <TableRow key={vacation.PERSONAL_ID}>
                  <TableCell className="font-medium">{vacation.PERSONAL_ID}</TableCell>
                  <TableCell>{fullName}</TableCell>
                  <TableCell>{vacation.CURRENT_GENDER}</TableCell>
                  <TableCell>{vacation.SHAREHOLDER_STATUS ? "Yes" : "No"}</TableCell>
                  <TableCell>{vacation.ETHNICITY}</TableCell>
                  <TableCell>{employmentStatus}</TableCell>
                  <TableCell>{vacation.totalVacationDaysCurrentYear}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </>
  )
};

export default VacationsTable;
