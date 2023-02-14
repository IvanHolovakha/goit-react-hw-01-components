import PropTypes from 'prop-types';
import { TableRow, TableData } from './Transaction.styled';

export const Transaction = ({data:{type, amount, currency}}) => {
  return (
    <TableRow>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
  )
}

Transaction.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
}