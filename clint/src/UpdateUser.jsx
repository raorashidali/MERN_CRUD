import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [number, setNumber] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(result => {
        console.log("RESULT", result.data.number);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
        setFatherName(result.data.fatherName);
        setNumber(result.data.number);
      })
      .catch(err => console.log(err));
  }, [id]); // Ensure useEffect runs when id changes

  const Update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age,fatherName,number })
      .then(response => {
        console.log(response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
      <div className='w-50  bg-white  rounded p-3'>
        <form onSubmit={Update}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor="Name">UserName</label>
            <input type="text" placeholder='Enter name ' className='form-control'
              value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="fatherName">Father Name</label>
            <input type="fatherName" placeholder='Enter fatherName ' className='form-control'
              value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder='Enter Email ' className='form-control'
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="number">Number</label>
            <input type="number" placeholder='Enter number ' className='form-control'
              value={number} onChange={(e) => setNumber(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="age">Age</label>
            <input type="text" placeholder='Enter Age ' className='form-control'
              value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
