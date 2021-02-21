import react from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const StatisticsItem = ({stat}) => {
    return (
        <li className={styles.item}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
        </li>
    );
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticsItem;