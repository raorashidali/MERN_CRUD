import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Users() {
    const [users,setUsers]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:3001')
      .then(result=>setUsers(result.data))
      .catch(err=> console.log(err))

    },[])

    const handledelete=(id)=>{
       axios.delete('http://localhost:3001/deleteUser/' + id)
      .then(res => {
        const updatedUsers = users.filter(user => user._id !== id);
        setUsers(updatedUsers)
      })
      .catch(err=> console.log(err))

    }     
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
        <div className='w-50  bg-white  rounded p-3'>
        <Link to="/create"className='btn btn-success '>Add+</Link>
        <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Father Name</th>
          <th>Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((user)=>{
                return<tr>
                  
                    <td> {user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.fatherName}</td>
                    <td>{user.number}</td>
                       <td className=''> 
                       <Link to={`/update/${user._id}`}className='btn btn-success mr-10'>Update user</Link>
                            <button className='btn  btn-danger ml-5' onClick={(e)=>handledelete(user._id)}>delete</button>
                        </td>
                </tr>
            })
        }
         
      </tbody>
    </table>
        </div>
    </div>
  )
}

export default Users
