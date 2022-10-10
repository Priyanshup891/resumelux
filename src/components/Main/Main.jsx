import React from 'react';
import styled from 'styled-components';
import mainBg from '../../assets/images/mainBg3.png';
import ResumeBuilder from '../ResumeBuilder/ResumeBuilder';
import ResumeDisplay from '../ResumeDisplay/ResumeDisplay';

const Main = () => {
  return (
    <MainContainer>
        <Content>
            <ResumeBuilder/>
            <ResumeDisplay/>
        </Content>
    </MainContainer>
  )
}

const MainContainer = styled.div`
width:100% ;
height:calc(100vh - 70px) ;
background-image:url(${mainBg}) ;
background-size:cover ;
background-position:center ;
`;

const Content = styled.div`
display:flex ;
flex-direction:row ;
align-items:flex-start ;
justify-content:space-between ;
padding: 2rem 6rem ;
`;

export default Main