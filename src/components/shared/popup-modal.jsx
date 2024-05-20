import { useState } from "react";
import { Button } from "../ui/button";
import { Plus } from 'lucide-react';
import { Modal } from "../ui/modal";
import { ScrollArea } from "../ui/scroll-area";

export default function PopupModal({ renderModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button className="text-xs md:text-sm" onClick={() => setIsOpen(true)}>
        <Plus className="mr-2 h-4 w-4" /> Add New
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={'!bg-background !px-1 min-w-[1120px]'}
        title="Create New Employee"
        description="Please fill in the details below."
      >
        <ScrollArea className="h-[80dvh] px-6">
          {renderModal(onClose)}
        </ScrollArea>
      </Modal>
    </>
  )
}