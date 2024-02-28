import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Login() {
    const [username,setUser] = useState()
    const [password,setPwd] = useState()
    const navigate = useNavigate();

    const handleLog =()=>{
        axios.post('http://localhost:3000/api/users/login',{username,password})
        .then(res=>{
            console.log(res.data)
            if(res.data.status==='success'){
                if(res.data.role==='admin'){
                   navigate('/admin')
                }
                else{
                    navigate('/user')
                }
            }
        })
        .catch(err=>{
            console.log(err)
        })

    }
  return (
    <div style={{backgroundColor:'#69acc7',height:'100vh',width:'100vw'}}>

        <center>
            <table  style={{border:'2px solid black',fontSize:'25px',backgroundColor:'#fcfcfc',padding:'20px'}}>
                <tr>
                    <th> <center> <h2> Login</h2></center></th>
                </tr>
                <tr>
                    <td><input type="text" placeholder='Username' onChange={(e)=>setUser(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><input type="password" placeholder='password' onChange={(e)=>setPwd(e.target.value)}/></td>
                </tr>
                <tr>
                    <center>
                    <button onClick={handleLog} style={{backgroundColor:'#69acc7'}}> Login</button>
                    </center>
                </tr>
            </table>
        </center>
    </div>
  )
}
