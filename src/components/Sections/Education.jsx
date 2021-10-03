import React, {useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { submit } from "../../app/redux/educationSlice";
import { Form, Row, Col, Button } from "react-bootstrap";
export const Education = () => {
    const { educationList } = useSelector((state) => state.education);
    const dispatch = useDispatch();
    const [count, setCount] = useState(educationList.length? educationList.length-1:0);
    const [fieldValues, setFieldValues] = useState(educationList.length ? educationList : [{}]); 
  
    
  
    const onCancel = () => {
      const filtered = fieldValues.filter(
        (item, index) => index !== count - 1 && Object.keys(item).length !== 0
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
        
          dispatch(submit({ educationList: fieldValues }));
        
      
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
            <p className="mt-3">Education #{i+1}</p>
                <Form className={"mt-2"}>
                <Row>
                  <Col>
                    <Form.Group controlId="collegeName">
                      <Form.Label>College Name</Form.Label>
                      <Form.Control type="text" name="collegeName"  value={getValue("collegeName",i)} onChange={handleChange(i)} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="degree">
                      <Form.Label>Degree</Form.Label>
                      <Form.Control
                        type="text"
                        name="degree"
                        value={getValue("degree",i)}
                        onChange={handleChange(i)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
        
                <Row>
                  <Col xs={6}>
                    <Form.Group controlId="startDate">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control type="date" name="startDate"  value={getValue("startDate",i)}onChange={handleChange(i)} />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="endDate">
                      <Form.Label>End Date</Form.Label>
                      <Form.Control type="date" name="endDate"  value={getValue("endDate",i)} onChange={handleChange(i)}/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="description">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={`3`}
                        name="description"
                        value={getValue("description",i)}
                        onChange={handleChange(i)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  {count >=1 && i != 0 && (
                    <Col md={`auto`}>
                      <Button variant="danger" className="mt-3" onClick={onCancel}>
                        Delete
                      </Button>
                    </Col>
                  )}
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
