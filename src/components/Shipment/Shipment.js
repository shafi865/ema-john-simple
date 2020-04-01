import React from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/UseAuth';


const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data) }
    const auth = useAuth();

   
  return (
   
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={auth.user.name} placeholder='Name' name="Name" ref={register({ required: true })} />
      {errors.Name && <span className="error">Name is required</span>}
      
      <input defaultValue={auth.user.email}  placeholder='E-mail' name="Email" ref={register({ required: true })} />
      {errors.Email && <span className="error">Email is required</span>}
      
      <input  placeholder='Address Line 1' name="AddressLine1" ref={register({ required: true })} />
      {errors.AddressLine1 && <span className="error">Address is required</span>}
     
      <input  placeholder='Address Line 2' name="AddressLine2" ref={register} />
     
      <input  placeholder='City' name="City" ref={register({ required: true })} />
      {errors.City && <span className="error">City is required</span>}
      
      <input  placeholder='District' name="District" ref={register({ required: true })} />
      {errors.District && <span className="error">District is required</span>}
     
      <input  placeholder='Country' name="Country" ref={register({ required: true })} />
      {errors.Country && <span className="error">Country is required</span>}
      
      <input  placeholder='Zip Code' name="ZipCode" ref={register({ required: true })} />
      {errors.ZipCode && <span className="error">Zip Code is required</span>}
      
      
      
      <br/>
            <input type="submit" />
    </form>
  )
};

export default Shipment;