import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState()

  console.log(data)
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
    reset()
  };
  const clearData = () => setData('')


  return (
    <div >
      <h1>It's A Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            id='firstName'
            name="firstName"
            placeholder="bill"
            ref={register({ required: true, maxLength: 188 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="luo"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input 
          id="email"
          name="email" 
          ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea 
          id="message"
          name="message" 
          ref={register({ required: false })} />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white"}}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <button type="submit">Submit!</button>
        <button onClick={clearData}>Clear</button>
      </form>
    </div>
  );
};

export default ContactForm;
