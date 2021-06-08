import {Router} from '@reach/router'
import Navbar from "./Components/Navbar";
import NotFound from './Components/NotFound';
import People from "./Components/People";
import Planets from "./Components/Planets";
import Home from './Components/Home'
import Films from './Components/Films';
import Ships from './Components/Ships';
import Vehicles from './Components/Vehicles';
import Species from './Components/Species';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Home path="/" />
        <People path="/people/:id" />
        <Films path="/films/:id" />
        <Ships path="/starships/:id" />
        <Vehicles path="/vehicles/:id" />
        <Species path="/species/:id" />
        <Planets path="/planets/:id" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
