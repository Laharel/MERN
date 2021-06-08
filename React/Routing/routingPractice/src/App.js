import {Router} from '@reach/router'
import Display from './components/Display'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Display path="/:param" />
        <Display path="/:param/:color/:bkcolor" />
        <Home path="home" />
      </Router>
    </div>
  );
}

export default App;
