import PropTypes from 'prop-types';

import { StatisticsItem } from './StatisticsItem';
import { Card, Title, StatList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Card>
      <Title>{title}</Title>

      <StatList>
        {stats.map(item => (
          <StatisticsItem key={item.id} data={item} />
        ))}
      </StatList>
    </Card>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
