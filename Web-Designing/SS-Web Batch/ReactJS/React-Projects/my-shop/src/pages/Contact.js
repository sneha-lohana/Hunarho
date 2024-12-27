import React from 'react';
import "./Contact.css";
import { useForm } from 'react-hook-form';

export default function Contact() {

  const {register, handleSubmit, watch, formState: {errors}} = useForm({
    defaultValues: { name: "Sneha", email: "", subscribe: false}
  });
  
  const contactFormSubmit = (data) => {
    console.log(data);
  }

  console.log(errors);
  
  return (
    <div>
        <h1 style={ {textAlign: 'center' }}>Contact Us</h1>
        <form className='contact-form' onSubmit={handleSubmit(contactFormSubmit)}>
          <div className='form-control' >
            <label htmlFor='name'>Name</label>
            <input id="name" {...register("name", { 
              required: "Name is Mandatory",
              minLength: {
                value: 3,
                message: "Name should be minimum 3 character long"
              },
              maxLength: {
                value: 50,
                message: "Name can't be more that 50 character long."
              }
              })} />
            {errors.name?.message}
          </div>
          <div className='form-control' >
            <label htmlFor='email'>Email</label>
            <input id="email" type='email' {...register("email", { required: "Email is Mandatory"})} />
            {errors.email?.message}
          </div>
          <div className='form-control' >
            <label htmlFor='subscribe'>Subscribe</label>
            <input id="subscribe" type='checkbox' {...register("subscribe")} />
          </div>
          
          <button>Submit</button>
          <br/>
          Data: {JSON.stringify( watch())}
        </form>
    </div>
  )
}
