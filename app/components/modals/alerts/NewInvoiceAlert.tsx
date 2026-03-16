"use client";

import React, { useState } from "react";

// RHF
import { useFormContext } from "react-hook-form";

// Context
import { useInvoiceContext } from "@/contexts/InvoiceContext";
import { useTranslationContext } from "@/contexts/TranslationContext";

// ShadCn
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type NewInvoiceAlertProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  confirmLabel?: string;
  onConfirm?: () => void;
};

const NewInvoiceAlert = ({
  children,
  title,
  description,
  confirmLabel,
  onConfirm,
}: NewInvoiceAlertProps) => {
  const { _t } = useTranslationContext();
  // Invoice context
  const { newInvoice } = useInvoiceContext();

  const {
    formState: { isDirty },
  } = useFormContext();

  const [open, setOpen] = useState(false);

  const handleNewInvoice = () => {
    if (isDirty) {
      // If the form is dirty, show the alert dialog
      setOpen(true);
    } else {
      // If the form is not dirty, call the newInvoice function from context
      (onConfirm ?? newInvoice)();
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    (onConfirm ?? newInvoice)();
    setOpen(false);
  };

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {title ?? _t("modals.newInvoiceAlert.title")}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {description ?? _t("modals.newInvoiceAlert.description")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>
              {_t("modals.newInvoiceAlert.cancel")}
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirm}>
              {confirmLabel ?? _t("modals.newInvoiceAlert.confirm")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Not for showing div and instead showing the whole button */}
      {React.cloneElement(children as React.ReactElement, {
        onClick: handleNewInvoice,
      })}
    </>
  );
};

export default NewInvoiceAlert;
