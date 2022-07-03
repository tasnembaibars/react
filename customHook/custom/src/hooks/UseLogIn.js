
import React,{useState} from 'react'
import CustomHook from './CustomHook'
function UseLogIn() {
const[emailin,setEmail]=useState('')
const[passin,setPass]=useState('')
const[email,pass,onChange]=CustomHook(emailin,passin)

  
return (


    <div>
      <form onSubmit={onChange}>
        <div>
        <label></label>
        <input type="email"  onChange={e=>setEmail(e.target.value)} />
        <label></label>
        <input type="password"  onChange={e=>setPass(e.target.value)} />
        </div>
        <button>log in</button>    
      </form>

    </div>
  )
}

export default UseLogIn
