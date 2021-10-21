import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'clsx';
import TableCell from '@mui/material/TableCell';
import withStyles from '@mui/styles/withStyles';
import { getBorder } from '../utils';

const styles = theme => ({
  cell: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    '&:first-child': {
      paddingLeft: theme.spacing(3),
    },
    '&:last-child': {
      paddingRight: theme.spacing(3),
      borderRight: 0,
    },
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    borderBottom: getBorder(theme),
    borderRight: getBorder(theme),
  },
  beforeBorder: {
    borderLeft: getBorder(theme),
  },
});

const CellBase = ({
  column, value, children, classes, tableRow, tableColumn, row, className, beforeBorder,
  forwardedRef, ...restProps
}) => (
  <TableCell
    className={classNames({
      [classes.cell]: true,
      [classes.beforeBorder]: beforeBorder,
    }, className)}
    {...restProps}
    ref={forwardedRef}
  >
    {children}
  </TableCell>
);

CellBase.propTypes = {
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  className: PropTypes.string,
  beforeBorder: PropTypes.bool,
  forwardedRef: PropTypes.object,
};

CellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined,
  beforeBorder: false,
  forwardedRef: undefined,
};

export const Cell = withStyles(styles, { name: 'Cell' })(CellBase);
