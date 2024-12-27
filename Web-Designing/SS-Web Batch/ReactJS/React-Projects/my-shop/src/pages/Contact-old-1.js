import React, { use, useState } from 'react';
import "./Contact.css";

export default function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    description: '',
    country: '',
    subscribe: false
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});
    if (contactForm.name === "" || contactForm.name === null){
      setErrors({ name: "Name is mandatory"}) ;
      return;
    }
    if (contactForm.email === "" || contactForm.email === null){
      setErrors({email: "Email is mandatory"});
      return;
    }
    if (contactForm.description === "" || contactForm.description === null){
      setErrors({description: "Description is mandatory"});
      return;
    }
    console.log(contactForm);
  }

  const handleChange = (event) => {
    // console.log(event.target)
    // console.log(event.target.id, event.target.value);
    setContactForm({
      ...contactForm,
      [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value
    })
  }

  return (
    <div>
        <h1 style={ {textAlign: 'center' }}>Contact Us</h1>
        <form className='contact-form' onSubmit={handleSubmit} noValidate>
          <div className='form-control' >
            <label htmlFor='name'>Name</label>
            <input id="name" name="name" value={contactForm.name} onChange={ handleChange } required formNoValidate/>
            {errors && errors.name}
          </div>
          <div className='form-control' >
            <label htmlFor='email'>Email</label>
            <input id="email" name="email" type='email' value={contactForm.email} onChange={handleChange} required/>
            {errors && errors.email}
          </div>
          <div className='form-control' >
            <label htmlFor='description'>Description</label>
            <textarea id="description" name="description" value={contactForm.description} onChange={handleChange}></textarea>
            {errors && errors.description}
          </div>
          <div className='form-control'>
            <label htmlFor='country'>Country</label>
            <select id="country" name="country" onChange={handleChange} value={contactForm.country}>
              <option value="1">India</option>
              <option value={2}>US</option>
              <option value={3}>UK</option>
              <option value={4}>Russia</option>
            </select>
          </div>
          <div className='form-control' >
            <label htmlFor='subscribe'>Subscribe</label>
            <input id="subscribe" name="subscribe" type='checkbox' checked={contactForm.subscribe} onChange={ handleChange }/>
          </div>
          <button>Submit</button>
          <br/>
          Data: {JSON.stringify(contactForm)}
        </form>
    </div>
  )
}
