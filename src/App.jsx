import React, { useState,useRef } from 'react'
import Auth from './ component /Auth'
import Cookies from 'universal-cookie';
import Chat from './ component /Chat';
import '../src/Styles/main.css'
import '../src/Styles/room.css'


const cookies =new Cookies()


const App = () => {
  const [auth,isauth]=useState(cookies.get("auth-token")) 
  const [room,setroom]=useState(null)
  const roomref=useRef(null)
  if (!auth){  return (
    <div id='auth'>
      <Auth isauth={isauth}/>
    </div>
  )}
  else
  {return !room?(<div id='sign'>
    <div >
        <h1>
    input the room name
  </h1>
<input ref={roomref} id='disp'/><br/>
<button id='btn2' onClick={()=>
  setroom(roomref.current.value)
}>Join</button>
    </div>



 </div>
  ): (<div><Chat room={room}/></div>)
 
}

}

export default App
