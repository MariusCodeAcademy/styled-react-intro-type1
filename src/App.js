import './App.css';
import Button from './components/ui/Button';
import Services from './components/services/Services';
import Plan from './components/Plan';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/srv'>
          <Services />
        </Route>
        <Route path='/plan'>
          <Plan />
        </Route>
        <Route path='/'>
          <Button> Normal button</Button>
          <Button extra> Extra button</Button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
