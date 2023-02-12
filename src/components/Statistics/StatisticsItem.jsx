import PropTypes from 'prop-types';

export const StatisticsItem = ({data: {label, percentage}}) => {
    return (
      <li class="item" style={{marginRight: "10px", display: "flex", flexDirection: "column"}}>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}%</span>
      </li> 
    )
}

StatisticsItem.propTypes = {
data: PropTypes.exact({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}).isRequired,
}