import React from 'react';
import styled from '@emotion/styled';







  const Text = styled.div`
@media (max-width: ${props => props.theme.breakpoints.s}) {
  flex-direction: row;
  text-align:center;
  padding:0;}
  width:50%;
  margin: 0;
  padding-bottom: 0.5rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  padding-right: 15px;
  text-align:center;
  p{
    margin:0;
    display: grid;
    margin-bottom:1rem;
    a{
      color:#fff;
    } 
  }
  input{
      width: 100%;
      margin-bottom:1rem;
    }
  
`;
  

  const Form = () => (
  <Text>
    <form>
      <label>
        <p>Dejanos tu direccion de correo y te contactamos</p>
        <input type="email" name="email" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </Text>);

export default Form;


  