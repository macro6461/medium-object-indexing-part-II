import GroupsContainer from './components/GroupsContainer'
import {users, groups} from './data';
import './App.css'
process.title = 'hash';

const App = () => {

  return (
    <div className="App">
      <h1>INDEXING PART II DEMO</h1>
      <GroupsContainer groups={groups} users={users}/>
    </div>
  );
}

export default App;
