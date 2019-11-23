import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/logo-plugin.png';

const StyledLink = styled.a`
  display: flex;
  font-weight: 700;
  align-items: center;
  img { width: 50px; height:auto;}
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 0.9rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.grey.base};
    margin-left: 1rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.violet.base};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink href="https://pluginonline.net" target="_blank"><img src={logo} alt="Gatsby Logo" ></img>
    </StyledLink>
    <Nav>
      <Link to="/">Inicio</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">Nosotras</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
