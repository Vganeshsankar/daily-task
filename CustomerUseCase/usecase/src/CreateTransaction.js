import React, { useState } from "react";
import { Fieldset,fontHead, InputBox, InputGroupBox,}
  
export const CreateTransaction=()=>
{
    const [user, setUser] = useState({
        transactionId: "",
        date: "",
        type: "credit",
        mode: "",
        amount: "",
        to: "",
      });
    
      const onChange = (a) => {
        setUser({
          ...user,
          [a.target.name]: a.target.value,
        });
      };
    
    return(       
            <>
              <h2 className="text-center my-3">New Transaction</h2>
              <form className=" bg-light  shadow">
                <InputBox
                  id="name"
                  type="text"
                  label="ID"
                  name="transactionId"
                  whenChange={(a) => onChange(a)}
                  state={user.transactionId}
                />
                <InputBox
                  id="date"
                  type="date"
                  label="Date"
                  whenChange={(a) => onChange(a)}
                  state={user.date}
                  name="date"
                />
                <Fieldset
                  heading="Type"
                  radioChange={(a) => onChange(a)}
                  state={user}
                />
                <div className="row my-5">
                  <label className="col-sm-2 col-form-label" style={fontHead}>
                    Mode:
                  </label>
                  <div className="col-sm-10">
                    <select className="form-select" value={user.mode}>
                      <option value="neft">NEFT</option>
                      <option value="upi">UPI</option>
                      <option value="rtgs">RTGS</option>
                    </select>
                  </div>
                </div>
        
                <InputGroupBox
                  id="amount"
                  type="number"
                  label="Amount"
                  groupText="Rs"
                  area="end"
                  whenChange={(a) => onChange(a)}
                  state={user.amount}
                  name="amount"
                />
        
                <InputGroupBox
                  id="to"
                  type="text"
                  label="To"
                  groupText="@"
                  area="start"
                  whenChange={(a) => onChange(a)}
                  state={user.to}
                  name="to"
                />
        
                <button type="submit" className="btn btn-success float-end btn">
                  Send Money
                </button>
              </form>
            </>       
    );
}