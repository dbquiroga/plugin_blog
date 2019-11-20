import React from 'react';
import styled from '@emotion/styled';
import { Form } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fab);



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
      margin-left: 1rem;
    }
    div{
      display: inline-block;
    } 
  }
  form{
    margin-bottom:5rem;
  }
  input{
      width: 80%;
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
     
      <p><FontAwesomeIcon icon={["fas","fa-envelope"]}  /><a href="#">hola@pluginonline.net</a>
      <div><FontAwesomeIcon icon={["fab","linkedin-in"]}  /><a href="https://www.linkedin.com/company/28828264/admin/" target="_blank" >Linkedin</a></div>
      <div><FontAwesomeIcon icon={["fab","instagram"]}  /><a href="https://www.instagram.com/plug_in_software/" target ="_blank">Instagram</a></div>
      <div><FontAwesomeIcon icon={["fab","facebook-f"]}  /><a href="https://www.facebook.com/Plug-In-107508997300613/?eid=ARAR5GonqU34h0tyZ0uDXGVpTGdmvCHfCsNJAe2rlXpurpehPiZAXiNgUicDttNZmjvjcFJCUcO6evIZ" target="_blank">Facebook</a></div></p>

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
