import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form'

const HookForm = () => {
  // console.log(useForm());
  console.log("render")
    const{register,
        handleSubmit,
        formState : {errors},
        watch
     }= useForm();

     const onSubmit = (data)=>{
        console.log("form Data: ", data)
     }

     const submitReady = watch("username") && watch("email") && watch("password");
  return (
     
      <div className="d-flex justify-content-center w-100">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              className={watch("username")?.length < 3 ? "text-danger" : "text-primary"}
              {...register("username", {required: "Name is required", minLength: {value: 3, message: "name should be more than 2"}})}
            />
            {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email",  {required: "enter your email", pattern: {value: /\S+@\S+\.\S+/, message:"email should be correct"}})}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", {required: "enter your password", minLength:{value:8, message:"password must be at least 8 characters"}})}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
          </Form.Group>

          <Button variant="primary" type="submit" disabled={!submitReady}>
            Submit
          </Button>
        </Form>
      </div>
  )
}

export default HookForm