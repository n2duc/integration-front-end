import { AlertModal } from "@/components/shared/alert-modal"
import { useEffect, useState } from "react";
import { Edit, MoreHorizontal, Trash, Eye } from 'lucide-react';
// import { useRouter } from "@/routes/hooks";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { Modal } from "@/components/ui/modal";
import { ScrollArea } from "@/components/ui/scroll-area";
import EmployeeDetail from "./employee-detail";
import EmployeeUpdateForm from "./employee-update-form";

export const CellAction = ({ employeeId }) => {
  const { toast } = useToast();

  const [loading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const onClose = () => setIsOpen(false);
  const onCloseUpdate = () => setOpenUpdate(false);
  // const router = useRouter();

  const onConfirm = async () => {
    try {
      // Delete employee
      await axios.delete(`http://localhost:8080/api/employees/${employeeId}`);
      setOpen(false);
      toast({
        title: "Success",
        description: "Employee deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: `${error.message}` || "An error occurred. Please try again.",
        variant: "destructive"
      })
    }
  };

  return (
    <>
      <AlertModal 
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      {/* Update Form Modal */}
      <Modal
        isOpen={openUpdate}
        onClose={onCloseUpdate}
        className={'!bg-background !px-1 min-w-[1120px]'}
        title="Update Employee"
        description="Please fill in the details below."
      >
        <ScrollArea className="h-[80dvh] px-6">
          <EmployeeUpdateForm modalClose={onCloseUpdate} employeeId={employeeId} />
        </ScrollArea>
      </Modal>

      <EmployeeDetail isOpen={isOpen} onClose={onClose} employeeId={employeeId} />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setIsOpen(true)}>
            <Eye className="mr-2 h-4 w-4" /> Detail
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenUpdate(true)}>
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem className="!text-red-500" onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}