 import React, { useState } from 'react'
 import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
 function CreateUser() {

  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [age,setAge]=useState()
  const [fatherName, setFatherName] = useState()
  const [number, setNumber] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", { name, email, age,fatherName,number })
      .then(response => {
        console.log(response.data)
        navigate('/')
        // Handle success, if needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error, if needed
      });
  };
  


   return (
      <div  className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
        <div className='w-50  bg-white  rounded p-3'>
          <form onSubmit={ handleSubmit} >
                <h2>Add User</h2>
                <div className='mb-2'>
                  <label htmlFor="Name"></label>
                  <input type="text" placeholder='Enter name 'className='form-control'
                  onChange={(e)=> setName(e.target.value)} />

                </div>
                <div className='mb-2'>
                  <label htmlFor="Email"></label>
                  <input type="email" placeholder='Enter Email 'className='form-control' 
                  onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                  <label htmlFor="fatherName"></label>
                  <input type="fatherName" placeholder='Enter fatherName 'className='form-control' 
                  onChange={(e)=> setFatherName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                  <label htmlFor="number"></label>
                  <input type="number" placeholder='Enter Phone 'className='form-control' 
                  onChange={(e)=> setNumber(e.target.value)}/>
                </div>
              
                <div className='mb-2'>
                  <label htmlFor="age"></label>
                  <input type="text" placeholder='Enter Age 'className='form-control'
                  onChange={(e)=> setAge(e.target.value)} />
                </div>
                <button className='btn btn-success'>Submit</button>

          </form>

        </div>
      </div>
   )
 }
 
 export default CreateUser
 