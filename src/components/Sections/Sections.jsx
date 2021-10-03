import React from "react";
import css from "./Sections.module.css";
import { Personal, Profile, Skills, Education, Experience } from ".";
import { Card } from "react-bootstrap";
import clsx from "clsx";

export const Sections = ({ name }) => {
 

  return (
    <div className={css.sectionContainer}>
      <Card text={`dark `} className={clsx(css.card)}>
        <Card.Header className={`p-3 font-weight-bold`}>{name}</Card.Header>
        <Card.Body>
          {name === "Personal" ? (
            <Personal />
          ) : name === "Profile" ? (
            <Profile />
          ) : name === "Education" ? (
            <Education/>
          ) : name === "Experience" ? (
            <Experience/>
          ) : name === "Skills" ? (
            <Skills />
          ) : (
            <></>
          )}
        </Card.Body>
      </Card>
      
    </div>
  );
};
