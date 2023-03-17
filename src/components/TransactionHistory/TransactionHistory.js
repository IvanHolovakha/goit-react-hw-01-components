import PropTypes from 'prop-types';

import { Transaction } from "./Transaction";
import { Table, TableHeader } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>

      <tbody>
        {items.map(item => <Transaction key={item.id} data={item} />)}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}