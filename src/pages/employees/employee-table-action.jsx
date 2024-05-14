import PopupModal from "@/components/shared/popup-modal";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import EmployeeCreateForm from "./employee-create-form";

const EmployeeTableActions = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-1 gap-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="all">All</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="full-time">Full time</SelectItem>
              <SelectItem value="part-time">Part time</SelectItem>
              <SelectItem value="all">All</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-3">
        <PopupModal
          renderModal={(onClose) => <EmployeeCreateForm modalClose={onClose} />}
        />
      </div>
    </div>
  )
}

export default EmployeeTableActions;