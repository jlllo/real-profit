/* eslint-disable no-shadow */
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import 'date-fns';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { SimulatorDataTypes } from '../../store/ducks/SimulatorData/types';
import useStyles from '../../styles/global';

export default function InputInvestment() {
  const { investment } = useSelector((state: ApplicationState) => state.simulatorData);
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleChange(event: unknown, value: number) {
    if (value !== null) {
      dispatch({
        type: SimulatorDataTypes.SET_INVESTMENT,
        payload: value,
      });
    }
  }

  return (
    <CurrencyTextField
      label="Valor investido"
      variant="standard"
      value={investment}
      currencySymbol="R$"
      decimalCharacter=","
      digitGroupSeparator="."
      outputFormat="number"
      onChange={handleChange}
      className={classes.currencyText}
    />
  );
}

