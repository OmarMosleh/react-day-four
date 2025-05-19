import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ControlledForm = () => {

  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const validate = () => {
    const errs = {};
    if (!data.userName || data.userName.length < 2) {
      errs.userName = "You must enter more than 2 characters.";
    }
    if (!data.email) {
      errs.email = "You must enter an email.";
    }
    if (!data.password || data.password.length < 8) {
      errs.password = "You must enter a password > 8.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("DATA:", data);
  };

  const isFormValid = Object.values(data).every((val) => val.trim() !== "");
  
  return (
    <>
      <div className="d-flex justify-content-center w-100">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="userName"
              type="text"
              placeholder="Enter Name"
              onChange={handleChange}
              className={errors.userName ? "text-danger" : "text-primary"}
            />
            {errors.userName && <p style={{ color: "red" }}>{errors.userName}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          </Form.Group>

          <Button variant="primary" type="submit" disabled={!isFormValid} >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ControlledForm;
