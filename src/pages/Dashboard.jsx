import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar } from "../components/Sidebar";
import { ResumePreview } from "../features/ResumePreview";
import { Sections } from "../components/Sections";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "../app/redux/sidebarSlice";
import { sections } from "../components/Sidebar";
export const Dashboard = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.navigation.name);
  
  const handleClick = (selection) => (e) => {
    dispatch(add(selection));
  };

 

  return (
    <Container fluid>
      <Row>
        <Col >
          <Sidebar handleClick={handleClick} sections={sections} name={name}/>
         <Sections name={name}/>
        </Col>
        <Col>
          <ResumePreview placeholder={`Preview`}/>
        </Col>
      </Row>
    </Container>
  );
};
