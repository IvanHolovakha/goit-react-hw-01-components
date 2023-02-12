import PropTypes from 'prop-types';

export const FriendListItem = ({friend: {name, avatar, isOnline}}) => {
    return (
        <li class="item" style={{display: "flex"}}>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
friend: PropTypes.exact({
id: PropTypes.number.isRequired,
name: PropTypes.string.isRequired,
avatar: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
}).isRequired,
}