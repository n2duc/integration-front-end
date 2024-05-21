import PaginationSection from "@/components/shared/pagination-section";
import { Badge } from "@/components/ui/badge";
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
import usePagination from "@/hook/usePagination";

const VacationsTable = ({ vacations }) => {
  const { currentPosts, setCurrentPage, postsPerPage, currentPage } = usePagination(vacations);
  return (
    <>
      {vacations && (
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
                <TableHead className="text-left w-[200px]">Current Years (days)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPosts.map((vacation) => {
                const fullName = `${vacation.CURRENT_FIRST_NAME} ${vacation.CURRENT_MIDDLE_NAME} ${vacation.CURRENT_LAST_NAME}`;
                const employmentStatus = vacation["EMPLOYMENT.EMPLOYMENT_STATUS"];
                // const newStatus = employmentStatus.replace("-", " ").toLowerCase().replace(/\b\w/g, function(l){ return l.toUpperCase() })
                const shareholderStatus = vacation.SHAREHOLDER_STATUS ? "Shareholder" : "Non-shareholder";
                return (
                  <TableRow key={vacation.PERSONAL_ID}>
                    <TableCell className="font-medium">{vacation.PERSONAL_ID}</TableCell>
                    <TableCell>{fullName}</TableCell>
                    <TableCell>{vacation.CURRENT_GENDER}</TableCell>
                    <TableCell>{shareholderStatus}</TableCell>
                    <TableCell>{vacation.ETHNICITY}</TableCell>
                    <TableCell>{employmentStatus}</TableCell>
                    <TableCell>{vacation.totalVacationDaysCurrentYear}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          {vacations.length > postsPerPage && (
            <PaginationSection
              totalPosts={vacations.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </>
      )}
    </>
  )
};

export default VacationsTable;
