import React from 'react';
import styled from 'styled-components';
import opnerBg from '../../assets/images/mainBg.png';
import hero from '../../assets/images/hero.png';
import { Link } from 'react-router-dom';

const OpenerPage = () => {
  return (
    <OpnerContainer>
        <Content>
            <div>
                <h1>resumelux</h1>
                <p>Create your resume with this simple and professional template.</p>
                <Link to="/resume" style={{textDecoration:"none"}}>
                <button><span>Create Resume</span></button>
                </Link>
            </div>
            <img src={hero} alt="resume" />
        </Content>
    </OpnerContainer>
  )
}

const OpnerContainer = styled.div`
width:100% ;
height:calc(100vh - 70px) ;
background-image:url(${opnerBg}) ;
background-size:cover ;
background-position:center ;
`;

const Content = styled.div`
width:100% ;
height:100% ;
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:center ;
padding-top:4rem ;

& > div{
    background: rgba(255, 255, 255, 0.19);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(3.7px);
-webkit-backdrop-filter: blur(3.7px);
padding:1rem ;
width:900px ;
height:100% ;
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:center ;

h1{
    font-style: normal;
font-weight: 600;
font-size: 50px;
color: #FFFFFF;
}

p{
    font-style: normal;
font-weight: 400;
font-size: 14px;
text-align: center;
width:300px ;
color: #A6A6A6;
}

button{
    align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 16px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin-top:1rem ;

  &::active, &:hover{
    outline: 0;
  }

  & > span{
    background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
  }

  &:hover span{
    background: none;
  }
}
}

img{
    height:400px ;
}
`;

export default OpenerPage;
