import ExcelExport from "@/components/shared/excel-export";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const BenefitsTableActions = ({ filterGender, filterShareholder, data }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-1 gap-4">
        <Select onValueChange={filterGender}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Gender</SelectLabel>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="all">All</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={filterShareholder}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by shareholder" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Shareholder</SelectLabel>
              <SelectItem value="shareholder">Shareholder</SelectItem>
              <SelectItem value="non-shareholder">Non shareholder</SelectItem>
              <SelectItem value="all">All</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ExcelExport data={data} fileName="benefits" />
    </div>
  )
}

export default BenefitsTableActions;