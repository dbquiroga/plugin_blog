import React from 'react';
import styled from '@emotion/styled';

  const Text = styled.div`
@media (max-width: ${props => props.theme.breakpoints.m}) {
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
  form{
    width:100%;
  }
  input{
    width: 85%;
    margin-bottom:1rem;
    font-weight:400;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    }

    input[type="submit"] {
    width:30%;
    text-align: center;
    vertical-align: middle;
    padding: 5px;
    color: #fff;
    background-color: #540bc8;
    border-color: #540bc8;
    font-weight:400;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
}
    label{
      p{
        padding:0;
      }
    }
  
`;
  

  const Form = () => (
  <Text>
    <form>
      <label>
        <p>Dejanos tu correo y te contactamos</p>
        <input type="email" name="email" />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  </Text>);

export default Form;


  