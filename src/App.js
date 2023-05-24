import './App.css';

import ButtonComponent from './components/bouton';
import WireModuleComponent from './components/files';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <WireModuleComponent />
      <ButtonComponent />

      </header>
    </div>
  );
}

export default App;
