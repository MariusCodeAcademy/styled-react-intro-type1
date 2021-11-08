import './App.css';
// import Button from './components/ui/Button';
// import Services from './components/services/Services';
// import Plan from './components/Plan';
import styled from 'styled-components';

const MyButton = styled.button`
  font-size: 3rem;
  padding: 10px;

  background-color: ${(props) => (props.extra ? 'tomato' : 'white')};
`;

function Button(props) {
  // logic
  return <MyButton extra={props.extra}>{props.children}</MyButton>;
}

function App() {
  return (
    <div className='App'>
      {/* <Services /> */}
      {/* <Plan /> */}
      <Button> Normal button</Button>
      <Button extra> Extra button</Button>
    </div>
  );
}

export default App;
