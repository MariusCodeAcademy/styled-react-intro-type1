import styled from 'styled-components';

const MyButton = styled.button`
  font-size: 3rem;
  padding: 10px;
`;

function Button(props) {
  // logic
  return <MyButton>{props.children}</MyButton>;
}

export default Button;
