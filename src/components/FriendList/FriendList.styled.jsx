import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 250px;
  padding: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 5px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? '#076807' : '#ff0000')};
`;

export const Avatar = styled.img`
margin-left: 15px;
  margin-right: 15px;
  border-radius: 8px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
