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
          <div>
            <ResumeBuilder/>
            <DownloadBtn onClick={handlePrint}>Download</DownloadBtn>
          </div>
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

@media (max-width: 1076px){
  height:100% ;
}
`;

const Content = styled.div`
display:flex ;
flex-direction:row ;
align-items:flex-start ;
justify-content:space-between ;
padding: 2rem 6rem ;
gap:2rem;

@media (max-width: 1076px){
flex-direction:column ;
padding:2rem 1rem ;
}

& > div{

  display:flex ;
  flex-direction:column ;
  align-items:flex-end ;
  width:100% ;
}
`;

const DownloadBtn = styled.button`
 margin-top:1rem ;
    appearance: none;
  backface-visibility: hidden;
  background-color: #2f80ed;
  border-radius: 10px;
  border-style: none;
  box-shadow: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 14px 30px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  &:hover{
    background-color: #1366d6;
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
  }

  &:hover:after{
    opacity: .5;
  }

  &:active{
    box-shadow: rgba(0, 0, 0, .1) 0 3px 6px 0, rgba(0, 0, 0, .1) 0 0 10px 0, rgba(0, 0, 0, .1) 0 1px 4px -1px;
  transform: translateY(2px);
  transition-duration: .35s;
  }

  &:hover:after{
    opacity: 1;
  }
`;

export default Main;

