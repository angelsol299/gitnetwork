import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https:github.com/mojombo'
      },
      {
        id: '2',
        login: 'angel',
        avatar_url:
          'https://avatars3.githubusercontent.com/u/32056957?s=400&u=0f6fa6e9687f7bcb059e9f9d281a91d1baf42152&v=4',
        html_url: 'https://github.com/angelsol299'
      },
      {
        id: '3',
        login: 'Dominic',
        avatar_url:
          'https://avatars3.githubusercontent.com/u/1519870?s=460&v=4',
        html_url: 'https://github.com/trueadm'
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
