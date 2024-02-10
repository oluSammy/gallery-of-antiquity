import React, { memo } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";

import styles from "./dialog.module.css";
import ActionButton from "../Button/ActionButton";

interface Props {
  title?: string;
  content?: React.ReactNode;
  trigger?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading?: boolean;
  variant?: "info" | "warning" | "error";
  classNames?: string;
  onConfirm?: () => Promise<void> | void;
  onDeny?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  denyText?: string;
  cancelText?: string;
  includeCloseIcon?: boolean;
}

const DialogComponent: React.FC<Props> = memo(function DialogComponent({
  open,
  setOpen,
  title,
  content,
  variant,
  classNames,
  confirmText,
  cancelText,
  onConfirm,
  onDeny,
  onCancel,
  loading,
  includeCloseIcon = true,
}) {
  const handleClick = async (action: "confirm" | "cancel" | "deny") => {
    if (action === "confirm" && onConfirm) {
      await onConfirm();
      setOpen(false);
      return;
    }

    if (action === "cancel" && onCancel) {
      return onCancel();
    }

    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />

        <Dialog.Content
          className={clsx(
            styles.DialogContent,
            styles["DialogContent-min"],
            variant && styles[`DialogContent-${variant}`],
            classNames && classNames
          )}
        >
          {title && (
            <Dialog.Title className={styles.DialogTitle}>{title}</Dialog.Title>
          )}

          {content}

          {includeCloseIcon && (
            <Dialog.Close asChild>
              <button className={styles.IconButton} aria-label="Close">
                <IoMdClose />
              </button>
            </Dialog.Close>
          )}
          <div className={"flex items-center justify-between mt-8"}>
            {cancelText && onCancel && (
              <ActionButton
                label={cancelText}
                className=""
                onClick={() => handleClick("cancel")}
              />
            )}
            {confirmText && onConfirm && (
              <ActionButton
                label={confirmText}
                className=""
                onClick={() => handleClick("confirm")}
                isLoading={loading}
              />
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});

export default DialogComponent;
