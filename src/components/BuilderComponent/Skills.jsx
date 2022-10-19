import React, {useContext, useState} from 'react';
import {v4 as uuid} from 'uuid';
import { ResumeContext } from '../../context/resumeContext';
import { Tag, TagCloseButton, TagLabel} from '@chakra-ui/react';
import styled from 'styled-components';

const Skills = () => {

  const [skill, setSkill] = useState("");
  const {skills, setSkills} = useContext(ResumeContext);

  const onHandleChange = (e) => {
    setSkill(e.target.value);
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(!skill || skill === " "){
      return;
    }

    const newSkill = {
      id: uuid(),
      name: skill
    }

    setSkills([...skills, newSkill]);
    setSkill("");
  }

  const onHandleDelete = (id) => {
    setSkills(skills.filter((sk) => sk.id !== id));
  }


  return (
    <SkillsContainer>
      <Content>
        <form onSubmit={onHandleSubmit}>
          <input type="text" name='name' placeholder='Skill' value={skill} onChange={(e) => onHandleChange(e)} />
          <button type='submit'>Add Skill</button>
        </form>
        <div>
          {
            skills.length > 0 ? skills.map((skill, index) => (
          <STag key={index}>
            <TagLabel style={{color:"#fff"}}>{skill.name}</TagLabel>
            <STagCloseButton onClick={() => onHandleDelete(skill.id)}/>
          </STag>
            )) : <p>No Skills Added</p>
          }
        </div>
      </Content>
    </SkillsContainer>
  )
}


const SkillsContainer = styled.div`
margin-top:1rem ;
`;

const Content = styled.div`
display:flex ;
flex-direction:column ;

& > form{
  display:grid ;
  grid-template-columns: 2fr 1fr ;
  align-items:center ;
  gap:0.5rem;
  width:100% ;

  input{
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

  button{
    padding: 0.7rem 0.75rem;
  font-size: 0.875rem;
  background-color: #d3d3d3;
  border: none;
  outline: none;
  font-weight: 600;
  transition-duration: 0.2s;
  border-radius: 3px;
  margin-top:7px ;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  }
}

& > div{
  background-color: rgba(255, 255, 255, 0.3);
  border-radius:3px ;
  width:100% ;
  height:100% ;
  padding:10px ;
  margin-top:1rem ;
  display:flex ;
  flex-wrap:wrap ;
  gap:0.5rem;
}
`;

const STag = styled(Tag)`
background-color: #999999;
    padding: 0.4rem 0.6rem;
    border-radius: 2rem;
    display: flex;
    align-items:center ;
    gap:0.5rem;
`;

const STagCloseButton = styled(TagCloseButton)`
background:transparent ;
border:none ;
color:#fff ;
font-size:1rem ;
`;

export default Skills