import ManagePlayers from './components/ManagePlayers';
// import ManageStatus from './components/ManageStatus';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <ManageStatus  /> */}
        <ManagePlayers path="/" />
        {/* <Redirect from="/" to="/players/list" /> */}
      </Router>
    </div>
  );
}

export default App;