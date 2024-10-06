import { Modal, ModalAction, ModalClose, ModalContent } from "keep-react";
import { cn } from "keep-react/utils";
import React from "react";

interface PropsTypes {
  children: React.ReactNode;
  modalOver: React.ReactNode;
  className?: string;
}

const KeepModal: React.FC<PropsTypes> = ({
  children,
  modalOver,
  className,
}) => {
  return (
    <Modal>
      <ModalAction asChild>{modalOver}</ModalAction>
      <ModalContent
        className={cn(
          "min-w-[20rem] px-10 py-10 lg:min-w-[26rem] rounded-[50px]",
          className
        )}
      >
        <ModalClose className="absolute right-5 top-6" />
        {children}
      </ModalContent>
    </Modal>
  );
};

export default KeepModal;
