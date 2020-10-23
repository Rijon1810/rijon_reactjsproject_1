import React, { useState } from "react";

const Contact = () => {
    const [data,setData] = useState({//use state /Hoook
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });
    const InputEvent =(event)=>{
        const {name,value} = event.target; //object di-strucring 
        setData((preVal)=>{
            return {
                ...preVal,//spread operator for fetching old/all previous value
                [name] : value,// for matching name attribute of them is same or not
            }
        })//for getting old value

    }
    const formSubmit=(e)=>{
        e.preventDefault(); //not for refresh
        alert(
         `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
        );

     

    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            
              <form onSubmit={formSubmit} >
                <div class="form-group">
                  <label for="exampleFormControlInput1">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"  
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter Your Name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Phone Number</label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                     name="phone" 
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="017089"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                     name="email" 
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="name@example.com"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
