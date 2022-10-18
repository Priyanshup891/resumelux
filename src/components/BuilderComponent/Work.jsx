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


const Work = () => {
  const { work, setWork } = useContext(ResumeContext);

  const onHandleChange = (e, id) => {
    const addWork = work.map((wo) => (
      id === wo.id ? Object.assign(wo, {id: uuid(), [e.target.name]: e.target.value}) : wo
    ))

    setWork(addWork);
  }

  const addMore = () => {
    setWork([...work, work]);
  };

  return (
    <WorkContainer>
      <Accordion allowToggle defaultIndex={[0]}>
        {
          work.map((wo, index) => (

        <AccordionItem key={index}>
          <h2>
            <SAccordionButton>
              <Box flex="1" textAlign="left">
                Work
              </Box>
              <AccordionIcon />
            </SAccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <WorkInfo>
              <div>
              <input type="text" name="position" placeholder="Position" onChange={(e) => onHandleChange(e,wo.id)} />
              <input type="text" name="company" placeholder="Company" onChange={(e) => onHandleChange(e,wo.id)} />
              </div>
              <select name="type" onChange={(e) => onHandleChange(e,wo.id)}>
                <option value="Employment">Employment</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
                <option value="Freelance">Freelance</option>
              </select>
            </WorkInfo>
            <WorkDates>
              <div>
                <label htmlFor="startDate" >Start Date</label>
                <input type="month" name="startDate" onChange={(e) => onHandleChange(e,wo.id)} />
              </div>
              <div>
                <label htmlFor="endDate">End Date</label>
                <input type="month" name="endDate" onChange={(e) => onHandleChange(e,wo.id)} />
              </div>
            </WorkDates>
            <WorkDescription>
              <textarea name="description" placeholder="Description" onChange={(e) => onHandleChange(e,wo.id)}></textarea>
            </WorkDescription>
          </AccordionPanel>
        </AccordionItem>
          ))
        }
      </Accordion>
      {work.length < 3 && (
        <AddMoreBtn onClick={addMore}>Add More</AddMoreBtn>
      )}
    </WorkContainer>
  );
};

const WorkContainer = styled.div`
  margin-top: 1rem;
`;

const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  & > div{
    display:grid ;
    grid-template-columns:1fr 1fr ;
    gap:0.5rem;
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

  select {
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
  option {
    color: #000;
  }
`;

const WorkDates = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  }
`;

const WorkDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

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

const SAccordionButton = styled(AccordionButton)`
  background-color: #fff;
  border: none;
  padding: 1rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.4rem;
  margin-top: 1rem;
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

export default Work;
