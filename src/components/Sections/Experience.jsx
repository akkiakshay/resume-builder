import React, {useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { submitExp } from "../../app/redux/experienceSlice";
import { Form, Row, Col, Button } from "react-bootstrap";
export const Experience = () => {
    const { experienceList } = useSelector((state) => state.experience);
    const dispatch = useDispatch();
    const [count, setCount] = useState(experienceList.length ? experienceList.length-1 : 0);
    const [fieldValues, setFieldValues] = useState(experienceList.length ? experienceList : [{}]); 
  
    
  
    const onCancel = () => {
      const filtered = fieldValues.filter(
        (item, index) => index !== count && Object.keys(item).length !== 0
      );
  
      setFieldValues(filtered);
      setCount(count - 1);
    };
  
    const handleChange =(index) => (e) => {
        const { name, value } = e.target;
      const newArr = [...fieldValues];
      if(!newArr[index]) newArr.push({}) 
      newArr[index][name] = value;
      setFieldValues(newArr);
    };
  
    const onSave = () => {
        
          dispatch(submitExp({ experienceList: fieldValues }));
        
      
    };

    const getValue = (name,i) => {
      
        if(fieldValues.length && i< fieldValues.length) {
            return fieldValues[i][name];
        }
        return ""
    }
  
    const createMultiple = (num) => {
      let arr = [];
      for (let i = 0; i <= num; i++) {
        
          arr.push(
              <>
            <p className="mt-3">Experience #{i+1}</p>
            <Form className={"mt-2"} key={i}>
            <Row>
              <Col>
                <Form.Group controlId="jobTitle">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control type="text" name="jobTitle" value={getValue("jobTitle",i)} onChange={handleChange(i)}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="companyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" name="companyName"  value={getValue("companyName",i)} onChange={handleChange(i)}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Group controlId="startDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type="date" name="startDate" value={getValue("startDate",i)} onChange={handleChange(i)} />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group controlId="endDate">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control type="date" name="endDate" value={getValue("endDate",i)} onChange={handleChange(i)}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={`3`}  name="description" value={getValue("description",i)} onChange={handleChange(i)}/>
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              
              {count >=1 && i != 0 && (<Col md={`auto`}>
                <Button variant="danger" className="mt-3" onClick={onCancel}>
                  Cancel
                </Button>
              </Col>)}
              
            </Row>
          </Form>
          </>
          );
        }
      
      return arr;
    };
  return (
    <div>
        
        {createMultiple(count)}
        <Row className="justify-content-center mt-5">
          <Col xs={"auto"}>
            <Button variant="secondary" onClick={() => setCount(count + 1)}>
              Add Another
            </Button>
          </Col>
          <Col xs={"auto"}>
            <Button variant="primary" onClick={onSave}>
              Save
            </Button>
          </Col>
        </Row>
       </div>
  );
};
