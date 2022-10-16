// import data from '../data/data.json';
// import friends from '../data/friends.json';
// import transaction from '../data/transaction.json';
import user from '../data/user.json';


import { Profile } from './Profile/Profile';

export const App = () => {
  return <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
      />;
};
