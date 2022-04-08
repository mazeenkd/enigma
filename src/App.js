import './index.css';
import Cards from './components/cards';
import Letters from './components/letters';
function App() {
  return (
    <div className="App" >
      <div className="reflect">
        <Cards></Cards>
      </div>
      <div className="rotors">
        <Cards></Cards>
        <Cards></Cards>
      </div>
      <div className="rotors">
        <Cards></Cards>
        <Cards></Cards>
      </div>
      <div className="rotors">
        <Cards></Cards>
        <Cards></Cards>
      </div>
      <div className="rotors">
        <Letters></Letters>
      </div>
    </div>
  );
}

export default App;
