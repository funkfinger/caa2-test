import './App.css';
import Menu from './Menu.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// <App />

function App() {
  return (
    <div className="App">
      <Menu />
      <h1>React App</h1>
      <Button>Bootstrap Button</Button><br />
      <button>not a bootstrap button</button><br />
      <button className="btn btn-success">sort of a bootstrap button</button><br />
    </div>
  );
}

export default App;
