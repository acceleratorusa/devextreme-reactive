import * as React from 'react';
import * as PropTypes from 'prop-types';
import Input from '@mui/material/Input';
import withStyles from '@mui/styles/withStyles';
import { DataTypeProvider } from '@devexpress/dx-react-grid';

const styles = {
  numericInput: {
    textAlign: 'right',
    width: '100%',
  },
};

const getInputValue = value => (value === undefined ? '' : value);

const EditorBase = ({ value, onValueChange, classes }) => {
  const handleChange = (event) => {
    const { value: targetValue } = event.target;
    if (targetValue.trim() === '') {
      onValueChange();
      return;
    }
    onValueChange(parseInt(targetValue, 10));
  };
  return (
    <Input
      type="number"
      classes={{
        input: classes.numericInput,
      }}
      fullWidth
      value={getInputValue(value)}
      inputProps={{
        min: 0,
        placeholder: 'Filter...',
      }}
      onChange={handleChange}
    />
  );
};

EditorBase.propTypes = {
  value: PropTypes.number,
  onValueChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

EditorBase.defaultProps = {
  value: undefined,
};

const Editor = withStyles(styles)(EditorBase);

const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const Formatter = ({ value }) => currencyFormatter.format(value);

const availableFilterOperations = [
  'equal', 'notEqual',
  'greaterThan', 'greaterThanOrEqual',
  'lessThan', 'lessThanOrEqual',
];

export const CurrencyTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={Formatter}
    editorComponent={Editor}
    availableFilterOperations={availableFilterOperations}
    {...props}
  />
);
