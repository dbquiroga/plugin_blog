import React from 'react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import { Header } from 'components';
import profile1 from '../../static/image/Gime-fernandez.jpeg';
import profile2 from '../../static/image/Day-quiroga.jpeg';


const CardStyle = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.s}) {      
      text-align: center;
      p{
        text-align: justify;
      }
      img {
        width: 100%;
        margin-bottom: 0px !important;
      }
      h4{
        font-weight: bold;
      }
  
  }
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;

  .col-md-6 {
    width: 50%;
    padding: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {    
    flex-direction: column; 
    .col-md-6 {
    width: 100%;
    }
  }  
`;


const Card = ({image, name, description}) => (
  <CardStyle>
    <img src={image}/>
    <h4>{name}</h4>
    <p>{description}</p>
  </CardStyle>
);

const About = center => (  
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="Plug In"> <p> Nosotras somos Plug In</p></Header>
    
    <Container center={center}>
      <StyledRow> 
        <div className="col-md-6">
        <Card 
            image={profile1} 
            name="Gimena Fernandez" 
            description={(
              <>
                Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum erat morbi magnis,
                curabitur suspendisse est cubilia libero mi interdum at cum inceptos.
                Scelerisque quis habitasse nisl suscipit cum morbi nulla accumsan nostra non,
                conubia pellentesque convallis dictum fermentum sollicitudin senectus eleifend.
                Justo natoque facilisi ante consequat mauris erat porta primis fusce,
                nunc sagittis imperdiet fames nulla ridiculus litora.
                <br/>
                <a href="https://github.com/gimenab" target="_blank">GitHub</a>
                <br/>
                <a href="https://www.linkedin.com/in/gimena-fern%C3%A1ndez/" target="_blank">Linkedin</a>
              </>
            )}
          />
        </div>

        <div className="col-md-6">
        <Card image={profile2}
          name="Day Quiroga"
          description={(
            <>
              Estudie marketing y publicidad, me encontré con la programación y el mundo del software.<br/>
              <b>Trabajé en comunicación digital: SEO, SEM, medición de Kpis y Google Analitycs,</b> hasta que quise hacer sitios webs.
              <br/><b>Hoy trabajo como tester de software, me dedico a hacer sitios webs y estudio Analista en sistema.</b>
              <br/>Amo los MPV (minimos productos viables) y crear nuevos proyectos. 
              <br/>
              <a href="https://github.com/dbquiroga" target="_blank">GitHub</a>
              <br/>
              <a href="https://www.linkedin.com/in/dbquiroga/" target="_blank">Linkedin</a>

            </>
          )}
          />
        </div>
          
          
      </StyledRow>     
    
    </Container>

  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
