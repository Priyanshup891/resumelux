import React from 'react';
import styled from 'styled-components';
import avatar from "../../assets/images/avatar.jpg";
import { MdEmail, MdPhoneIphone, MdLocationPin, MdLink } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const PreviewResume = () => {
  return (
    <ResumePreview>
    <PersonInfo>
      <PersonProfile>
        <Avatar>
          <img src={avatar} alt="avatar" />
        </Avatar>
        <div>
          <h4>Product Designer</h4>
          <h1>Kate Bishop</h1>
        </div>
      </PersonProfile>
      <PersonContact>
        <div>
          <MdEmail size={15} />
          <span>example321@gmail.com</span>
        </div>
        <div>
          <MdPhoneIphone size={15} />
          <span>+91-7387221290</span>
        </div>
        <div>
          <MdLocationPin size={15} />
          <span>Pune, India</span>
        </div>
        <div>
          <BsLinkedin size={15} />
          <span>Linkedin</span>
        </div>
      </PersonContact>
    </PersonInfo>
    <MainDetails>
      <WorkProjects>
        <div>
          <h2>Work experience</h2>
          <Work>
            <h3>Full Stack Developer</h3>
            <h4>
              XYZ Infotech Services - <span>Full-time</span>
            </h4>
            <span>2018-03 - 2021-12</span>
            <p>
              • Designed end-to-end experience for financial products on
              mobile & web platforms.
              <br />
              • Working closely with managers, marketing specialists and
              developers.
              <br />
              • Did user testing sessions to gather feedback, validate
              product features and brand perception.
              <br />
              • Conducted A/B tests for product features and design
              variations.
              <br />
              • Led the design process during of the internal rebranding
              project.
              <br />• Supported the engineering team with design
              deliverables.
            </p>
          </Work>
          <Work>
            <h3>Full Stack Developer</h3>
            <h4>
              XYZ Infotech Services - <span>Full-time</span>
            </h4>
            <span>2018-03 - 2021-12</span>
            <p>
              • Designed end-to-end experience for financial products on
              mobile & web platforms.
              <br />
              • Working closely with managers, marketing specialists and
              developers.
              <br />
              • Did user testing sessions to gather feedback, validate
              product features and brand perception.
              <br />
              • Conducted A/B tests for product features and design
              variations.
              <br />
              • Led the design process during of the internal rebranding
              project.
              <br />• Supported the engineering team with design
              deliverables.
            </p>
          </Work>
          <Work>
            <h3>Full Stack Developer</h3>
            <h4>
              XYZ Infotech Services - <span>Full-time</span>
            </h4>
            <span>2018-03 - 2021-12</span>
            <p>
              • Designed end-to-end experience for financial products on
              mobile & web platforms.
              <br />
              • Working closely with managers, marketing specialists and
              developers.
              <br />
              • Did user testing sessions to gather feedback, validate
              product features and brand perception.
              <br />
              • Conducted A/B tests for product features and design
              variations.
              <br />
              • Led the design process during of the internal rebranding
              project.
              <br />• Supported the engineering team with design
              deliverables.
            </p>
          </Work>
          
        </div>
        <div>
          <h2>Projects</h2>
          <Project>
            <h3>Website Clone</h3>
            <div>
              <h4>Website Clone</h4>
              <MdLink size={12} />
            </div>
            <p>
              • Designed end-to-end experience for financial products on
              mobile & web platforms.
              <br />
              • Working closely with managers, marketing specialists and
              developers.
              <br />• Did user testing sessions to gather feedback, validate
              product features and brand perception.
            </p>
          </Project>
          <Project>
            <h3>Website Clone</h3>
            <div>
              <h4>Website Clone</h4>
              <MdLink size={12} />
            </div>
            <p>
              • Designed end-to-end experience for financial products on
              mobile & web platforms.
              <br />
              • Working closely with managers, marketing specialists and
              developers.
              <br />• Did user testing sessions to gather feedback, validate
              product features and brand perception.
            </p>
          </Project>
          <Project>
            <h3>Website Clone</h3>
            <div>
              <h4>Website Clone</h4>
              <MdLink size={12} />
            </div>
            <p>
              • Designed end-to-end experience for financial products on
              mobile & web platforms.
              <br />
              • Working closely with managers, marketing specialists and
              developers.
              <br />• Did user testing sessions to gather feedback, validate
              product features and brand perception.
            </p>
          </Project>
        </div>
      </WorkProjects>
      <EducationSkills>
        <div>
          <h2>Education</h2>
          <Education>
            <h3>Master’s in Human-Computer Interaction</h3>
            <h4>Copenhagen School of Design and Technology</h4>
            <div>
              <span>2014-2018</span>
              <span>9 CGPA</span>
            </div>
          </Education>
          <Education>
            <h3>Master’s in Human-Computer Interaction</h3>
            <h4>Copenhagen School of Design and Technology</h4>
            <div>
              <span>2014-2018</span>
              <span>9 CGPA</span>
            </div>
          </Education>
        </div>
        <div>
          <h2>Skills</h2>
          <Skills>
            <div>
              <span>JavaScript</span>
            </div>
            <div>
              <span>ReactJS</span>
            </div>
            <div>
              <span>NodeJS</span>
            </div>
            <div>
              <span>MongoDB</span>
            </div>
            <div>
              <span>ExpressJS</span>
            </div>
            <div>
              <span>PHP</span>
            </div>
            <div>
              <span>.Net</span>
            </div>
            <div>
              <span>Java</span>
            </div>
            <div>
              <span>RestAPI</span>
            </div>
            <div>
              <span>jQuery</span>
            </div>
            <div>
              <span>MySQL</span>
            </div>
            <div>
              <span>Ajax</span>
            </div>
            <div>
              <span>Github</span>
            </div>
          </Skills>
        </div>
      </EducationSkills>
    </MainDetails>
  </ResumePreview>
  )
}

const ResumePreview = styled.div`
  width: 100%;
  height: 100%;
  background-color:#fff ;
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

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;

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
  width:100% ;

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
    justify-content:space-between ;
    width:100% ;

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
display:flex ;
flex-wrap:wrap ;
gap:0.5rem;

& > div{
  background-color:#999999 ;
  padding:0.4rem 0.6rem  ;
  border-radius:2rem ;
  display:flex ;

  span{
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 12px;
    color:#fff ;
  }
}
`;

export default PreviewResume