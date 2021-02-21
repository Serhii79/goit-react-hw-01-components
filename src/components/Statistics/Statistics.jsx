import react from 'react';
import StatisticsItem from './StatisticsItem';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({title, stats}) => {
    return (
        <section className={styles.statistics}>
            {title = true ? (
                <h2 className={styles.title}>{title}</h2>
            ) : null}
            <ul className={styles.statList}>
                {stats.map(stat => (
                    <StatisticsItem key={stat} stat={stat} />
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
}

Statistics.defaultProps = {
    stats: [],
}

export default Statistics;