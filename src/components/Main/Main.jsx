import React, {useContext} from 'react';
import styled from 'styled-components';
import mainBg from '../../assets/images/mainBg3.png';
import ResumeBuilder from '../ResumeBuilder/ResumeBuilder';
import ResumeDisplay from '../ResumeDisplay/ResumeDisplay';
import { useReactToPrint } from 'react-to-print';
import { ResumeContext } from '../../context/resumeContext';

const Main = () => {

  const {printElm} = useContext(ResumeContext);

  const handlePrint = useReactToPrint({
    content: () => printElm.current,
  })

  return (
    <MainContainer>
        <Content>
            <ResumeBuilder/>
            <ResumeDisplay/>
            <button onClick={handlePrint}>Download</button>
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
gap:2rem;
`;

export default Main