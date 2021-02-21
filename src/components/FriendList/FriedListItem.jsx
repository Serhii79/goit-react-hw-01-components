import react from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ friend }) => {
    const spanClasses = [styles.status];

    if (friend.isOnline !== true) {
        spanClasses.push(styles.ofline);
    } else {
        spanClasses.push(styles.online);
    };

    return (
        <li className={styles.item}>
            <span className={spanClasses.join(' ')}></span>
            <img className="avatar" src={friend.avatar} alt="" width="48" />
            <p className="name">{friend.name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}

FriendListItem.defaultProps = {
    name: 'Anonymous',
};

export default FriendListItem;