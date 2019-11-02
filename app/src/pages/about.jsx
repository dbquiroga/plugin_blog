import React from 'react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import logo from '../../static/logo/logo-plugin.png';


const StyledImg = styled.img`{
  display: flex;
  }`;

const CardStyle = styled.div`
  color: red;
`;

const Card = ({image, name, description}) => (
  <CardStyle>
    <img src={logo}/>
    <h1>Holaaa</h1>
    <p>Esto es un p</p>
  </CardStyle>
);

const About = center => (  
  <Layout>
    <Helmet title={'About Page'} />
    <Container center={center}>
      
      <Card/>
      <Card/>
    
    </Container>

  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
