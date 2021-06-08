import logo from './logo.svg';
import './App.css';
import BoxDisplay from './components/BoxDisplay'
import BoxParent from './components/BoxParent'
import Tabs from './components/Tabs'
import Tasks from './components/Tasks'

function App() {
  const tabs = [
    {label:"Q.1", content: "is Earth round?"},
    {label:"Q.2", content: "1+1 = ?"},
    {label:"Q3", content: "what's your name?"}
  ]
  return (
    <div className="App">
      {/* <BoxDisplay/> */}
      {/* <BoxParent/> */}
      {/* <Tabs tabs={tabs} /> */}
      <Tasks/>
    </div>
  );
}

export default App;
