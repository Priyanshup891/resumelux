import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { About, Education, Skills, Work, Projects } from '../BuilderComponent';

const ResumeBuilder = () => {
  return (
    <BuilderContainer>
        <STabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
        >
            <STabList>
                <STab>About</STab>
                <STab>Education</STab>
                <STab>Skills</STab>
                <STab>Work</STab>
                <STab>Projects</STab>
            </STabList>
            <STabPanel>
                <About/>
            </STabPanel>
            <STabPanel>
                <Education/>
            </STabPanel>
            <STabPanel>
                <Skills/>
            </STabPanel>
            <STabPanel>
                <Work/>
            </STabPanel>
            <STabPanel>
                <Projects/>
            </STabPanel>
        </STabs>
    </BuilderContainer>
  )
}

const BuilderContainer = styled.div`
width:500px ;
`;

const STabs = styled(Tabs)`
background: rgba(255, 255, 255, 0.19);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(3.7px);
-webkit-backdrop-filter: blur(3.7px);
border: 1px solid rgba(255, 255, 255, 0.43);
width:100% ;
height:100% ;
padding:1rem ;
`;

const STabList = styled(TabList)`
display:flex ;
list-style:none ;
flex-direction:row ;
align-items:center ;
gap:2rem;
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
background:transparent ;
user-select: none;
color:#fff ;


&.is-selected {
  border-bottom:1px solid #fff ;
  outline:none ;
  }
  &:focus {
   background:transparent ;
   border-bottom:1px solid #fff ;
   outline:none ;
  }
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = 'TabPanel';


export default ResumeBuilder