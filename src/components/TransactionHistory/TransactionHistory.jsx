import react from 'react';
import TransactionHistoryItem from './TransactionHistoryItem';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
        <table class={styles.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <TransactionHistoryItem key={item.id} item={item} />
                ))}
            </tbody>
        </table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
}

TransactionHistory.defaultProps = {
    items: [],
}

export default TransactionHistory;