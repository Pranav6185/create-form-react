import React from 'react'
import { useState } from 'react'

function App() {
  const [formdata,setdata] = useState({firstname:"",lastname:"",email:"",country:"",streetaddress:"",city:"",state:"",pincode:"",commnets:false,candidates:false,offers:false,pushnotification:""});

  function changehandler(event){
    const {name,value,type,checked} = event.target
    setdata((prev) => ({...prev,[name]:value}));
    
  }

  function submithandler(event){
     event.preventDefault();
     console.log("all printing is done ");
     console.log(formdata)
  }
  return (
    <div>
        <form onSubmit={submithandler}>
          <label htmlFor='firstname'>First Name: </label>
          <br/>
          <input type='text' placeholder='Pranav' name='firstname' id='firstname' value={FormData.firstname} onChange={changehandler}></input>
          <br/>

          <label htmlFor='lastname'>Last Name</label>
          <br/>
          <input type='text' placeholder='Suryavanshi' name='lastname' id='lastname' value={FormData.lastname} onChange={changehandler}></input>
          <br/>

          <label htmlFor='email'>Enter Mail</label>
          <br/>
          <input type='email' placeholder='pranav6185@gmail.com' name='email' id='email' value={FormData.email} onChange={changehandler}></input>
          <br/>

         <label htmlFor='contry'>Select Country</label>
         <br/>
          <select name='country' id='country' value={formdata.country} onChange={changehandler}>
         
               <option value='India'>India</option>
               <option value='US'>US</option>
               <option value='China'>China</option>
               <option value='Rashia'>Rashia</option>
          </select>
          <br/>

          <label htmlFor='streetaddress'>Street Address: </label>
          <br/>
          <input type='text' placeholder='1234 main street' name='streetaddress' id='streetaddress' value={FormData.streetaddress} onChange={changehandler}></input>
          <br/>

          <label htmlFor='city'>City</label>
          <br/>
          <input type='text' placeholder='Pune' name='city' id='city' value={FormData.city} onChange={changehandler}></input>
          <br/>

          <label htmlFor='state'>State</label>
          <br/>
          <input type='text' placeholder='Maharastra' name='state' id='state' value={FormData.state} onChange={changehandler}></input>
          <br/>

          <label htmlFor='pincode'>Pin Code</label>
          <br/>
          <input type='digit' placeholder='123456' name='pincode' id='pincode' value={FormData.pincode} onChange={changehandler}></input>
          <br/>


          <fieldset>
             <legend>By Email</legend>
             
             <label htmlFor='commnets'>Commnets</label>
            <input type='checkbox' placeholder='enter here'  name='commnets' checked={formdata.commnets} onChange={changehandler} />
            <br/>
        
            <label htmlFor='candidates'>Candidates</label>
            <input type='checkbox' name='candidates'  checked={formdata.candidates} onChange={changehandler} /> 
            <br/>

            <label htmlFor='offers'>Offers</label>
            <input type='checkbox' name='offers' checked={formdata.offers} onChange={changehandler} /> 
            <br/>
          </fieldset>
          <br/>

          <fieldset>
            <legend>Push Notification</legend>

            <input type='radio' name='pushnotification' id='all' value="all" onChange={changehandler}></input>
            <label htmlFor='all'>push all</label>
            <br/>

            <input type='radio' name='pushnotification' id='same' value="same" onChange={changehandler}></input>
            <label htmlFor='same'>same as email</label>
            <br/>

            <input type='radio' name='pushnotification' id='no' value="nopush" onChange={changehandler}></input>
            <label htmlFor='no'>No push notification</label>
            <br/> 

            <button >Submit</button>
          </fieldset>
        </form>
    </div>
  )
}

export default App