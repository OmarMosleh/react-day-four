import React, { useEffect } from "react";
import { useRef } from "react";
const UnControlledForms = () => {
 
  const nameRef = useRef()
  const phoneRef = useRef()
  const emailRef = useRef()

  useEffect(()=>{
    console.log(nameRef)
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value
    };
    
    console.log("userData are : ", data)
    
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                userName
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="name"
                ref={nameRef}
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
              name="phone"
                type="tel"
                className="form-control"
                placeholder="01********"
                ref={phoneRef}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="name@example.com"
                ref={emailRef}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UnControlledForms;
