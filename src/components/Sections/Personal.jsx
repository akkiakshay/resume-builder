import React, { useRef,useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { submit } from "../../app/redux/personalSlice";

//inputs using useRef
export const Personal = () => {
    const personal = useSelector((state) => state.personal);
  const dispatch = useDispatch();
  const fullName = useRef(null);
  const designation = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);
    useEffect(() => {
        if(fullName.current){
            fullName.current.value = personal.fullName;
        }
        if(designation.current){
            designation.current.value = personal.designation;
        }
        if(email.current){
            email.current.value = personal.email;
        }
        if(mobile.current){ 
            mobile.current.value = personal.mobile;
        }
        
    }, [])
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(fullName.current.value, designation.current.value, email.current.value, mobile.current.value);
    dispatch(
      submit({
        fullName: fullName.current.value,
        email: email.current.value,
        mobile: mobile.current.value,
        designation: designation.current.value,
      })
    );
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="fullname">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text"  ref={fullName} />
        </Form.Group>

        <Form.Group controlId="designation">
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text"  ref={designation} />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"  ref={email} />
        </Form.Group>

        <Form.Group controlId="mobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number"  ref={mobile} />
        </Form.Group>

        <Button variant="primary" className="mt-3" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};
