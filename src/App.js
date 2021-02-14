import Profile from './profile/Profile';
import user from './output_data/social-profile/user.json';

function App() {
  return (
    <div className="App">
      <h1>Hello!!!</h1>

      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
