import React from "react";
import css from "./ResumePreview.module.css";
import { useSelector } from "react-redux";
import { BsFillEnvelopeFill, BsPhone } from "react-icons/bs";
import { useWindowSize } from "../app/hooks/useWindowSize";
import { Row, Col } from "react-bootstrap";
export const ResumePreview = ({placeholder}) => {
  const size = useWindowSize();
  const {fullName,designation,email,mobile} = useSelector((state) => state.personal);
  const profile = useSelector((state) => state.profile);
  const { experienceList } = useSelector((state) => state.experience);
  const { educationList } = useSelector((state) => state.education);
    const { skillsList } = useSelector((state) => state.skills);
  return (
    <div className={css.container}>
      <h4>{placeholder}</h4>
      <div className={css.resume} style={{transform : `scale(${Math.min(1,(size.width / size.height))})`}}>
        <div className={css.resume_header}>
          {fullName && designation && email && mobile && (
            <div className={css.content}>
              <h1>{fullName}</h1>
              <h2>{designation}</h2>
              <div className={css.inlineBox}>
                <p>
                  <span>
                    <BsFillEnvelopeFill />
                  </span>{" "}
                  {email}
                </p>
                <p>
                  <span>
                    <BsPhone />
                  </span>
                  {mobile}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className={css.resume_body}>
          <div className={css.contents}>
            {profile.description ? (
              <div className={css.section}>
                <div className={css.title}>Profile</div>
                <div className={css.content}>{profile.description}</div>
              </div>
            ) : (<></>)}
            {experienceList.length ? (
              <div className={css.section}>
                <div className={css.title}>Experience</div>
                <div className={css.content}>
                  {experienceList.map((experience,i) => (
                    <div className={css.splitter} key={`exp`+i}>
                      <div className={css.expDate}>
                        {experience.startDate} - {experience.endDate}
                      </div>
                      <div className={css.expDesc}>
                        <h3>{experience.jobTitle}</h3>
                        <h4>{experience.companyName}</h4>
                        <p>{experience.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (<></>)}
            {educationList.length ? (
              <div className={css.section}>
                <div className={css.title}>Education</div>
                <div className={css.content}>
                  {educationList.map((edu,i) => (
                    <div className={css.splitter} key={"edu"+i}>
                      <div className={css.expDate}>
                        {edu.startDate} - {edu.endDate}
                      </div>
                      <div className={css.expDesc}>
                        <h3>{edu.degree}</h3>
                        <h4>{edu.collegeName}</h4>
                        <p>{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ): (<></>)}

            {skillsList.length ? (
              <div className={css.section}>
                <div className={css.title}>Skills</div>
                <div className={css.content}>
                  <div className={css.skills}>
                    <Row>
                      {skillsList.map((skill,i) => (
                        <Col xs={3} key={`sk`+i}>
                          <div className={css.marker}>{skill.text}</div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </div>
            ): (<></>)}
          </div>
        </div>
      </div>
    </div>
  );
};
