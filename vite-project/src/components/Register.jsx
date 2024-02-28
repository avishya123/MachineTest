import React, {  useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function Register() {
    const [username,setUser] = useState()
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPwd] = useState()
    const navigate = useNavigate();
    

    const handleReg = ()=>{
        axios.post('http://localhost:3000/api/users/register',{username,email,name,password})
        .then(res=>{
            console.log(res.data);
            navigate('/login')
        })
        .catch(err=>{
            console.log(err)
        })

    }


  return (
    <div style={{backgroundColor:'#69acc7',height:'100vh',width:'100vw'}}>
        <center>
        <table style={{border:'2px solid black',fontSize:'25px',backgroundColor:'#fcfcfc'}}>
        <tr>
                    <th colSpan={2}> <center> <h2>Register</h2></center></th>
         </tr>
            <tr>
                <td><input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/></td>
                <td><input type="text" placeholder='Username' onChange={(e)=>setUser(e.target.value)}/></td>
            </tr>
            <tr>
                <td><input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/></td>
                <td><input type="password" placeholder='password' onChange={(e)=>setPwd(e.target.value)}/></td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <center>
                        <button onClick={handleReg} style={{backgroundColor:'#69acc7'}}>Register</button>
                    </center>
                </td>
            </tr>
        </table>
        </center>
    </div>
  )
}
