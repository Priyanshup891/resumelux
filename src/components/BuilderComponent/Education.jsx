import React, {useContext} from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import {RiArrowDownSLine} from 'react-icons/ri';
import { ResumeContext } from '../../context/resumeContext';
import styled from 'styled-components';



const Education = () => {

  const {education, setEducation} = useContext(ResumeContext);

  const onHandleChange = (e) => {
    setEducation({...education, [e.target.name]: e.target.value});
  }

  return (
    <EducationContainer>

    
    <Accordion>
        <AccordionSummary expandIcon={<RiArrowDownSLine />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <span>Degree</span>
        </AccordionSummary>
        <AccordionDetails>
          <NameInfo>
            <input type="text" name='degree' placeholder='Degree' />
            <input type="text" name='school' placeholder='School' />
          </NameInfo>
          <YearGradeInfo>
            <div>
              <label htmlFor="startYr">Start Year</label>
              <input type="number" name='startYr' placeholder='Start Year' />
            </div>
            <div>
              <label htmlFor="endYr">End Year</label>
              <input type="number" name='endYr' placeholder='End Year' />
            </div>
            <div>
              <label htmlFor="grade">Grade</label>
              <input type="number" name='grade' placeholder='Grade' />
            </div>
          </YearGradeInfo>
        </AccordionDetails>
    </Accordion>
    </EducationContainer>
  )
}


const EducationContainer = styled.div`
margin-top:1rem ;
`;

const NameInfo = styled.div`
display:flex ;
flex-direction:column ;

`;

const YearGradeInfo = styled.div`
display:grid ;
grid-template-columns:1fr 1fr 1fr ;
gap:0.5rem;

& > div{
  input{
    width:100%;
  }
}
`;

export default Education