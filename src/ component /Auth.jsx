
import React from 'react';
import { auth,provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth' 
import { Fingerprint } from 'lucide-react';
import Cookies from 'universal-cookie';
import '../Styles/auth.css'
const cookies =new Cookies()
 const Auth = (props) => {
  const{isauth}=props
    const sign=async()=>{
      try{  const res= await signInWithPopup(auth,provider)
       
       cookies.set("auth-token",res.user.refreshToken)
       isauth(true)
      
      }catch(err){
        console.log(err)
       } 
     

    } ;
    return(
      <div id="sign">
       
        <div><h1>Sign in </h1>
         <div id='txt'><p>how to use this app :<br/>
        <ul>
          <li>
            <p> First you must sign in with your Google account </p>
          </li>
          <li>
            <p>you can chat with your Friend only in the same room ,<br/> so you should type the same romm's name </p>
          </li>
        </ul>
          
          
          
          
          </p></div>
        <button onClick={sign} id='btn1'> <Fingerprint  size={20} color='green' id='icon'/>Sign in</button>
</div>
        

      </div>
    ); 
  
}
export default Auth


