import './App.css';
import header from '../src/app name.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/800px-UFC_Logo.svg.png"} className="ufc" alt="logo" />
        <img src={header} alt="app name" className="app-name"/>
      </header>
    </div>
  );
}

export default App;
