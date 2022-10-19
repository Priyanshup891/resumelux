import React, { useContext } from "react";
import styled from "styled-components";

import { MdEmail, MdPhoneIphone, MdLocationPin, MdLink } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { ResumeContext } from "../../context/resumeContext";

const ResumeDisplay = () => {
  const { printElm, about, education, work, projects, skills } =
    useContext(ResumeContext);
  return (
    <DisplayContainer>
      <ResumePreview ref={printElm}>
        <PersonInfo>
          <PersonProfile>
            {about.selectedFile && (
              <Avatar>
                <img src={about.selectedFile.base64} alt="avatar" />
              </Avatar>
            )}

            <div>
              <h4>{about.role}</h4>
              <h1>{about.name}</h1>
            </div>
          </PersonProfile>
          <PersonContact>
            <div>
              <MdEmail size={15} />
              <span>{about.email}</span>
            </div>
            <div>
              <MdPhoneIphone size={15} />
              <span>{about.phone}</span>
            </div>
            <div>
              <MdLocationPin size={15} />
              <span>{about.address}</span>
            </div>
            <div>
              <BsLinkedin size={15} />
              {about.linkedin && (
                <span>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href={about.linkedin}
                  >
                    Linkedin
                  </a>
                </span>
              )}
            </div>
          </PersonContact>
        </PersonInfo>
        <MainDetails>
          <WorkProjects>
            <div>
              <h2>Work experience</h2>
              {work.map((wo,index) => (
                <Work key={index}>
                  <h3>{wo.position}</h3>
                  <h4>
                    {wo.company} - <span>{wo.type}</span>
                  </h4>
                  <span>
                    {wo.startDate} - {wo.endDate}
                  </span>
                  <p>{wo.description}</p>
                </Work>
              ))}
            </div>
            <div>
              <h2>Projects</h2>
              {projects.map((project, index) => (
                <Project key={index}>
                  <h3>{project.name}</h3>
                  {project.url ? (
                    <a href={project.url}>
                      <h4>{project.name}</h4>
                      <MdLink size={12} />
                    </a>
                  ) : (
                    ""
                  )}
                  <p>{project.description}</p>
                </Project>
              ))}
            </div>
          </WorkProjects>
          <EducationSkills>
            <div>
              <h2>Education</h2>
              {education.map((educa, index) => (
                <Education key={index}>
                  <h3>{educa.degree}</h3>
                  <h4>{educa.school}</h4>
                  <div>
                    <span>
                      {educa.startYr}-{educa.endYr}
                    </span>
                    <span>{educa.grade}</span>
                  </div>
                </Education>
              ))}
            </div>
            <div>
              <h2>Skills</h2>
              <Skills>
                {skills.map((skill, index) => (
                  <div key={index}>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </Skills>
            </div>
          </EducationSkills>
        </MainDetails>
      </ResumePreview>
    </DisplayContainer>
  );
};

const DisplayContainer = styled.div`
  width: 100%;
  height: calc(100vh - 134px);
  background-color: #fff;
  overflow: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;

const ResumePreview = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const PersonInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const PersonProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h4 {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }

    h1 {
      font-style: normal;
      font-weight: 400;
      font-size: 35px;
      line-height: 120%;
    }
  }
`;

const Avatar = styled.div`
  position: relative;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
  }
`;

const PersonContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 14px;
      color: #222222;
    }
  }
`;

const MainDetails = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 70% 30%;
  margin-top: 2rem;
`;

const WorkProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-right: 5rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #0e6cc2;
      margin-bottom: 1rem;
    }
  }
`;

const Work = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #222222;
  }

  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 12px;
  }

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 12px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 14px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #222222;
  }

  & > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
    color: inherit;

    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: 9px;
      line-height: 12px;
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 14px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const EducationSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #0e6cc2;
      margin-bottom: 1rem;
    }
  }
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #222222;
  }
  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 12px;
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    span {
      font-style: italic;
      font-weight: 400;
      font-size: 9px;
      line-height: 14px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  & > div {
    background-color: #999999;
    padding: 0.4rem 0.6rem;
    border-radius: 2rem;
    display: flex;

    span {
      font-style: normal;
      font-weight: 600;
      font-size: 9px;
      line-height: 12px;
      color: #fff;
    }
  }
`;

export default ResumeDisplay;
