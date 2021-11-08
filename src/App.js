import './App.css';
import Button from './components/ui/Button';
import ButtonSecondary from './components/ui/ButtonSecondary';

function App() {
  return (
    <div className='App'>
      <Button>Click me here</Button>
      <button className='my-button'>I am simple</button>
      <ButtonSecondary />
    </div>
  );
}

export default App;
