import PropTypes from 'prop-types';

import { Item, Label, Percentage } from './StatisticsItem.styled';

export const StatisticsItem = ({data: {label, percentage}}) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
}

StatisticsItem.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
}