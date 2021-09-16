import {
  FormControl,
  FormControlProps,
  FormLabel,
  RadioGroup,
} from '@material-ui/core';
import React from 'react';

import LabelRadio from './LabelRadio';
import { IRadio } from './radio.interface';

interface Props extends FormControlProps<'fieldset'> {
  datas: IRadio[];
  selectedId: string | null;
  label?: string;
  isRow?: boolean;
  onChangeRadio: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void;
}

export default function RadioFormControl({
  datas,
  selectedId,
  label,
  isRow,
  onChangeRadio,
  ...rest
}: Props) {
  return (
    <FormControl component="fieldset" {...rest}>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup
        row={isRow}
        aria-label="gender"
        name="gender1"
        value={selectedId}
        onChange={onChangeRadio}
      >
        {datas.map((item) => (
          <LabelRadio
            key={item.id}
            label={item.label || item.id}
            value={item.id}
            disabled={item.disabled}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
