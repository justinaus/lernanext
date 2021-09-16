import {
  FormControlLabel,
  FormControlLabelProps,
  Radio,
} from '@material-ui/core';
import React from 'react';

interface Props extends Omit<FormControlLabelProps, 'control'> {}

export default function LabelRadio({ label, ...rest }: Props) {
  return <FormControlLabel control={<Radio />} label={label} {...rest} />;
}
