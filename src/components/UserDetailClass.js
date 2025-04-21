import React from "react";

// This is class based component
class UserDetailClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        avatar_url: 'https://avatars.githubusercontent.com/u/39559144?v=4',
        location: "dummyloc",
      },
    };
  }

  async componentDidMount() {
    // it is mostly used for api calls.
    const json = await fetch("https://api.github.com/users/prashantrai27");
    const data = await json.json();
    this.setState({
      userInfo: data,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} alt="alt-avatar"/>
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
      </div>
    );
  }
}

export default UserDetailClass;
