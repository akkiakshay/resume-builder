import React from "react";
import { Nav } from "react-bootstrap";

import css from "./Sidebar.module.css";
import clsx from "clsx";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Sidebar = ({sections,handleClick,name}) => {
 
  

  return (
    <>
      <Nav className={clsx(css.container, "justify-content-center")}>
        <div className="sidebar-sticky">
          <h5 className={css.brand}>Resume Builder</h5>
          {sections.map((section) => (
            <Nav.Item
              key={section.id}
              className={clsx(css.navItem, section.name === name && css.selected)}
              onClick={handleClick(section.name)}
            >
              <span>{section.icon}</span> {section.name}
            </Nav.Item>
          ))}
          <Nav.Item key={`download`} className={clsx("mt-4")}>
         <Link to="/view"> <span>{<BsDownload/>}</span> View Resume </Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
};
