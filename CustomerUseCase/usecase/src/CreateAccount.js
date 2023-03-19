import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fieldset, InputBox, InputGroupBox } 
from 'App';

export const CreateAccount=()=>
{

let navigate= useNavigate();

const [user, setUser] = useState({
  customerId: "",
  customerName: "",
  customerPin: "",
  customerStatus: "",
  customerAccountNumber: "",
  customerAccountBalance: "",
  customerAadhar: "",
  customerPan: "",
  customerContactNumber: "",
  customerEmail: "",
});

const onChange = (a) => {
  setUser({
    ...user,
    [a.target.name]: a.target.value,
  });
};

const onSubmit = async (a) => {
  a.preventDefault();
};


    return(
        <form className="bg-light">
        <InputBox
          id="name"
          type="text"
          name="customerName"
          whenChange={(a) => onChange(a)}
          state={user.customerName}
        />
        <InputBox
          id="email"
          type="email"
          whenChange={(a) => onChange(a)}
          state={user.email}
          name="email"
        />
        <InputBox
          id="password"
          type="password"
          whenChange={(a) => onChange(a)}
          state={user.password}
          name="password"
        />
  
        <InputGroupBox
          id="contact"
          type="number"
          groupText="+91"
          area="start"
          whenChange={(a) => onChange(a)}
          state={user.contact}
          name="contact"
        />
  
        <Fieldset
          heading="Type"
          radioChange={(e) => onChange(e)}
          state={user}
        />
  
        <button
          type="submit"
          className="btn btn-success float-end btn"
          onClick={(e) => onSubmit(e)}
        >
          Create Account
        </button>
      </form>
  
    );
}