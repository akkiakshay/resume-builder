import React, { useState } from "react";
import { Form,Button } from "react-bootstrap";
import { submit } from "../../app/redux/profileSlice";
import { useDispatch,useSelector } from "react-redux";
export const Profile = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
  const [value, setValue] = useState(profile.description);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      submit({
        description: value,
      })
    );
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="profile">
          <Form.Label>Profile</Form.Label>
          <Form.Control
            as="textarea"
            rows={`3`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" className="mt-3" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};
