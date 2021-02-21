import react from 'react';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({item}) => {
    return (
        <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
                
    )
};

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionHistoryItem;