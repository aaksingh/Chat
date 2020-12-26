import React from 'react'
import "../Css/Login.css";
import { Button } from "@material-ui/core"

import {actionTypes} from "../../reducer"
import {useStateValue} from "../../StateProvider.js"
import {auth, provider} from "../Firebase/firebase.js"

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = ()=>{
          auth.signInWithPopup(provider).then(result=>{
              console.log(result)
              dispatch({
                   type:actionTypes.SET_USER,    
                   user: result.user,
              })
              
          }).catch((error)=>{
              alert(error.message)
          })                  
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxB3uL_BisAkkKCsYMvzrJa06LwuX5WWs2Ng&usqp=CAU"/>
                <h3>LogIn to Chat</h3>
            <Button onClick={signIn}>
                Sigin With Google
            </Button>
            </div>
        </div>
    )
}

export default Login
