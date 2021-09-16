import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import React from 'react';
import { ReactNode } from 'react';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof Dialog> {
  title: string;
  children: ReactNode;
  isShowPrimaryButton?: boolean;
  isShowSecondaryButton?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onClose: () => void;
  onSubmit: () => void;
}

export function BaseDialog({
  title,
  children,
  isShowPrimaryButton = true,
  isShowSecondaryButton = false,
  primaryButtonText = 'Confirm',
  secondaryButtonText = 'Cancel',
  onClose,
  onSubmit,
  ...rest
}: Props) {
  return (
    <Dialog {...rest} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {isShowSecondaryButton && (
          <Button variant="contained" onClick={onClose}>
            {secondaryButtonText}
          </Button>
        )}
        {isShowPrimaryButton && (
          <Button variant="contained" color="primary" onClick={onSubmit}>
            {primaryButtonText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
