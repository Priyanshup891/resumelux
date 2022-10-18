import React, { useContext } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { ResumeContext } from "../../context/resumeContext";
import styled from "styled-components";

const Education = () => {
  const { education, setEducation } = useContext(ResumeContext);

  const onHandleChange = (e, id) => {
    const addEducation = education.map((educa) =>
      educa.id === id
        ? Object.assign(educa, { id: uuid(), [e.target.name]: e.target.value })
        : educa
    );

    setEducation(addEducation);
    console.log(education);
  };

  const addMore = () => {
    setEducation([...education, education]);
  };

  return (
    <EducationContainer>
      <Accordion defaultIndex={[0]}>
        {education.map((educa, index) => (
          <AccordionItem key={index}>
            <h2>
              <SAccordionButton>
                <Box flex="1" textAlign="left">
                  Degree
                </Box>
                <AccordionIcon />
              </SAccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <NameInfo>
                <input
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  onChange={(e) => onHandleChange(e, educa.id)}
                />
                <input
                  type="text"
                  name="school"
                  placeholder="School"
                  onChange={(e) => onHandleChange(e, educa.id)}
                />
              </NameInfo>
              <YearGradeInfo>
                <div>
                  <label htmlFor="startYr">Start Year</label>
                  <input
                    type="month"
                    name="startYr"
                    placeholder="Start Year"
                    onChange={(e) => onHandleChange(e, educa.id)}
                  />
                </div>
                <div>
                  <label htmlFor="endYr">End Year</label>
                  <input
                    type="month"
                    name="endYr"
                    placeholder="End Year"
                    onChange={(e) => onHandleChange(e, educa.id)}
                  />
                </div>
                <div>
                  <label htmlFor="grade">Grade</label>
                  <input
                    type="text"
                    name="grade"
                    placeholder="Grade"
                    onChange={(e) => onHandleChange(e, educa.id)}
                  />
                </div>
              </YearGradeInfo>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      {education.length < 2 && (
        <AddMoreBtn onClick={addMore}>Add More</AddMoreBtn>
      )}
    </EducationContainer>
  );
};

const EducationContainer = styled.div`
  margin-top: 1rem;
`;

const NameInfo = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #e5e5e5;
  }

  input {
    display: block;
    height: 40px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    border: none;
    color: #e5e5e5;

    &:focus {
      outline: none;
      background-color: rgba(255, 255, 255, 0.3);
    }

    &::placeholder {
      color: #e5e5e5;
    }
  }
`;

const YearGradeInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  margin-top: 10px;

  & > div {
    label {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #e5e5e5;
  }

  input {
    display: block;
    height: 40px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    border: none;
    color: #e5e5e5;

    &:focus {
      outline: none;
      background-color: rgba(255, 255, 255, 0.3);
    }

    &::placeholder {
      color: #e5e5e5;
    }
  }
`;

const AddMoreBtn = styled.button`
  padding: 0.7rem 0.75rem;
  font-size: 0.875rem;
  background-color: #d3d3d3;
  border: none;
  outline: none;
  font-weight: 600;
  transition-duration: 0.2s;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

const SAccordionButton = styled(AccordionButton)`
background-color:#fff ;
border:none ;
padding:1rem 0.75rem ;
font-size:1rem ;
border-radius:0.4rem ;
margin-top:1rem ;
`;

export default Education;
