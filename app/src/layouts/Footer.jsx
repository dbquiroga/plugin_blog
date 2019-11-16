import React from 'react';
import styled from '@emotion/styled';
import { Form } from 'components';




const Wrapper = styled.footer`
  text-align: center;
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.rightToLeft};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  padding-bottom: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 0.5rem;
  }
  div{
    width: 100%;
    display: flex;
    @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
    }
  }
`;

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
  padding-${props=> props.align}: 15px;
  text-align:${props=> props.align};
  p{
    margin:0;
    padding-left: 0.5rem;
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
  a{
    margin-bottom:1rem;
  }
`;


const Footer = () => (
  <Wrapper>
    <div>
     <Text align="left">
      <p><a href="#">hola@pluginonline.net</a>
      <a href="https://www.linkedin.com/company/28828264/admin/" target="_blank" >Linkedin</a>
      <a href="https://www.facebook.com/Plug-In-107508997300613/?eid=ARAR5GonqU34h0tyZ0uDXGVpTGdmvCHfCsNJAe2rlXpurpehPiZAXiNgUicDttNZmjvjcFJCUcO6evIZ" target="_blank">Facebook</a></p>
    </Text>
    <Text align="right">
    <Form></Form>
    </Text>
  </div>
  <span>
  Plug In -{' '}
  <a href="https://pluginonline.net">Plug In</a>
  </span>
  </Wrapper>
);
export default Footer;
