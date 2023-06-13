import React, { useEffect, useState } from 'react'
import  Axios  from 'axios'
import"./App.css"
const App = () => {
   let[users,setUsers]=useState([])
   let[user,setUser]=useState({})

  useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setUsers(res.data)) 
          
  },[])

  let userdetails=(a)=>{
    setUser(a)
  }

  let deleteuser=(a)=>{
    setUsers(users.filter(e=>e.id !==a.id))
  }

  

  return (
    
    <div  className='table-container'>
    {console.log(users)}

    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Usename</th>
                <th>Email</th>
                <th>Phone</th>
                <th colspan={2}> Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((a)=>{
                    return(
                    <tr key={a.id}>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.email}</td>
                        <td>{a.phone}</td>
                        <td><button onClick={()=>userdetails(a)}>Details</button></td>
                        <td><button onClick={()=>deleteuser(a)}>Delete</button></td>

                    </tr>
                    )
                     })}
            
        </tbody>
    </table>

    <div>
        {
            user&&(
                <>
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                </>
            )
        }
    </div>
    
    </div>
  )
}

export default App
