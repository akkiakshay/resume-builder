import React, {useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { submitExp } from "../../app/redux/experienceSlice";
import { Form, Row, Col, Button } from "react-bootstrap";
export const Experience = () => {
    const { experienceList } = useSelector((state) => state.experience);
    const dispatch = useDispatch();
    const [count, setCount] = useState(experienceList.length || 1);
    const [fieldValues, setFieldValues] = useState(experienceList.length ? experienceList : []); 
  
    useEffect(() => {
      if (fieldValues.length < count) {
        setFieldValues([...fieldValues, {}]);
      }
    }, [count]);
  
    const onCancel = () => {
      const filtered = fieldValues.filter(
        (item, index) => index !== count - 1 && Object.keys(item).length !== 0
      );
  
      setFieldValues(filtered);
      setCount(count - 1);
    };
  
    const handleChange = (e) => {
        const { name, value } = e.target;
      const newArr = [...fieldValues];
      newArr[count-1][name] = value;
      setFieldValues(newArr);
    };
  
    const onSave = () => {
        
          dispatch(submitExp({ experienceList: fieldValues }));
        
      
    };

    const getValue = (name) => {
        if(fieldValues.length){
            return fieldValues[count-1][name];
        }
        return ""
    }
  
    const createMultiple = (num) => {
      let arr = [];
      for (let i = 0; i < num; i++) {
        
          arr.push(
            <Form className={"mt-2"}>
            <Row>
              <Col>
                <Form.Group controlId="jobTitle">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control type="text" name="jobTitle" value={getValue("jobTitle")} onChange={handleChange}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="companyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" name="companyName"  value={getValue("companyName")} onChange={handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Group controlId="startDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type="date" name="startDate" value={getValue("startDate")} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group controlId="endDate">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control type="date" name="endDate" value={getValue("endDate")} onChange={handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={`3`}  name="description" value={getValue("description")} onChange={handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              
              {count >1 && (<Col md={`auto`}>
                <Button variant="danger" className="mt-3" onClick={onCancel}>
                  Cancel
                </Button>
              </Col>)}
              
            </Row>
          </Form>
          );
        }
      
      return arr;
    };
  return (
    <div>
        <p className="mt-3">Experience #{count}</p>
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
