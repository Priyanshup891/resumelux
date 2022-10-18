import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
// import { v4 as uuid } from "uuid";
// import { ResumeContext } from "../../context/resumeContext";
import styled from "styled-components";

const Projects = () => {

  // const {projects, setProjects} = useContext(ResumeContext);

  return (
    <ProjectContainer>
      <Accordion allowToggle defaultIndex={[0]}>
      <AccordionItem>
          <h2>
            <SAccordionButton>
              <Box flex="1" textAlign="left">
                Project
              </Box>
              <AccordionIcon />
            </SAccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ProjectInfo>
              <input type="text" name="name" placeholder="Name" />
              <input type="url" name="url" placeholder="Url" />
              <textarea name="description" placeholder="Description"></textarea>
            </ProjectInfo>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`

`;

const SAccordionButton = styled(AccordionButton)`
  background-color: #fff;
  border: none;
  padding: 1rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.4rem;
  margin-top: 1rem;
`;

const ProjectInfo = styled.div`
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

  textarea {
    display: block;
    height: 130px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 5px 10px;
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

export default Projects