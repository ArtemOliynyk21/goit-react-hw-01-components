import PropTypes from 'prop-types';

import {
    Container,
    FriendsList,
    FriendsItem,
    Status,
    Avatar,
    Name,
} from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
      <Container>
        <FriendsList>
          {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendsItem key={id}>
              <Status isOnline={isOnline}></Status>
              <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
              <Name>{name}</Name>
            </FriendsItem>
          ))}
        </FriendsList>
      </Container>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};


// <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="User avatar" width="48" />
//   <p class="name"></p>
//                 </li>