import PropTypes from 'prop-types';

import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { name, avatar, isOnline } }) => {
  return (
    <Item>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
