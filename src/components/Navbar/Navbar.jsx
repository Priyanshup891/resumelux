import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarContainer>
        <Content>
        <div>
            <Link to="/" style={{textDecoration:"none"}}>
            <h1>resumelux</h1>
            </Link>
            <NavLinks>
                <p>Templates</p>
                <p>Examples</p>
                <p>Services</p>
                <p>Magazine</p>
            </NavLinks>
        </div>
            <LoginBtn>Login</LoginBtn>
        </Content>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
width:100%;
height:70px ;
padding:1rem 6rem ;

@media (max-width: 830px) {
    padding:1rem;
  }


`;

const Content = styled.div`
display:flex ;
align-items:center ;
justify-content:space-between ;

& > div{
    display:flex ;
    align-items:center ;
    gap:2rem;

    h1{
        font-size:1.3rem ;
        font-weight:700 ;
        color:#000 ;
    }
}
`;

const NavLinks = styled.div`
display:flex ;
align-items:center ;
gap:2rem;

@media (max-width: 650px) {
    display:none ;
  }


p{
    font-size:0.875rem ;
    font-weight:500 ;
    color:#999999 ;
}
`;

const LoginBtn = styled.button`
padding:0.35rem 1.5rem ;
font-size:0.875rem ;
background-color:#D3D3D3 ;
border:none ;
outline:none ;
font-weight:600 ;
`;

export default Navbar