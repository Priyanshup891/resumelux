import { createContext, useRef, useState } from "react";

export const ResumeContext = createContext();

const ResumeProvider = ({ children }) => {
  const printElm = useRef();

  const [about, setAbout] = useState({
    selectedFile: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
  });

  const [education, setEducation] = useState([
    {
      id: "",
      degree: "",
      school: "",
      startYr: 0,
      endYr: 0,
      grade: "",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "React",
    },
  ]);

  const [work, setWork] = useState([
    {
      id: "",
      position: "",
      company: "",
      type: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      id: "",
      name: "",
      description: "",
      url: "",
    },
  ]);

  return (
    <ResumeContext.Provider
      value={{
        about,
        setAbout,
        education,
        setEducation,
        skills,
        setSkills,
        work,
        setWork,
        projects,
        setProjects,
        printElm,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
