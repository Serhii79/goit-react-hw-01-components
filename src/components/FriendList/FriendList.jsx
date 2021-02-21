import react from 'react';
import FriendListItem from './FriedListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

FriendList.defaultProps = {
    friends: [],
};

export default FriendList;