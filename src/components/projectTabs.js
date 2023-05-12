import React, { useState } from "react";
import {
  TabContainer,
  TabContent,
  Nav,
  NavItem,
  NavLink,
  Tab,
} from "react-bootstrap";
import { Project } from "./Project";
import { FinishedProjects } from "./FinishedProjects";
import { CollabProjects } from "./CollabProjects";
import { OngoingProjects } from "./OngoingProjects";

export const PortfolioTabs = () => {
  return (
    <div id="projects">
      <TabContainer defaultActiveKey="ongoing">
        <Nav variant="tabs" className="justify-content-center">
          <NavItem>
            <NavLink eventKey="finished" className="text-success fw-bold">
              Finished Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="ongoing" className="text-success fw-bold">
              Ongoing Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="collaborate" className="text-success fw-bold">
              Projects to Collaborate On
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          <Tab.Pane eventKey="ongoing">
            <OngoingProjects />
          </Tab.Pane>
          <Tab.Pane eventKey="finished">
            {/* content for finished projects tab */}
            <FinishedProjects />
          </Tab.Pane>
          <Tab.Pane eventKey="collaborate">
            <CollabProjects />
          </Tab.Pane>
        </TabContent>
      </TabContainer>
    </div>
  );
};
