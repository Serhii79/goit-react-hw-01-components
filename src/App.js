import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './output_data/social-profile/user.json';
import friends from './output_data/friend-list/friends.json';
import statisticalData from './output_data/statistics/statistical-data.json';
import transactions from './output_data/transaction-history/transactions.json';

// import './app.styles.css';


function App() {
  return (
    <div className="app">
      <h1>Hello!!!</h1>

      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <h2>Option with title</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <h2>Option without title</h2>
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
