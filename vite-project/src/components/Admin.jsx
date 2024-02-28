import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const navigate = useNavigate();
//  const [users,setuser]=useState([]);

  useEffect(()=>{
     axios.get('http://localhost:3000/api/users/admin')
     .then(res=>{
      if(res.data){
        console.log("success");
      }
      else{
              navigate('/admin');
      }
     })

  },[])

  // useEffect(()=>{
  //   axios.get('http://localhost:3000/api/users/getusers')
  //   .then(res=>{console.log(res.data)
  //   setuser(res.data)})
  // },[])
  return (
    <div style={{backgroundColor:'#69acc7',height:'100vh',width:'100vw'}}>
        <h1><center>ADMIN</center></h1>
        {/* <div>
          <table>
          {users.map((user)=>{
            <tr key={user._id}>
              <td> {user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          })}
          </table>
        </div> */}
    </div>
  )
}
