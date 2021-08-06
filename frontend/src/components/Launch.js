import {useState} from 'react'
import SigninOrUp from './SigninOrUp'
import Home from './Home'
const Launch = () =>{
    const[refreshToken, setRefreshToken] = useState("")
    const[accessToken, setAccessToken] = useState("")
    const getTokens = async (tokens) => {
        if(tokens["access"] !== undefined){
            localStorage.setItem('access_token', tokens.access)
            setAccessToken(tokens.access)
            // setRefreshToken(tokens.refresh)
        }else{
            alert('Incorrect password or email')
        }
        
    }
    console.log(accessToken)
    return (
        <div className="home">
            {(localStorage.getItem('access_token') === null)? 
            <SigninOrUp getToken={getTokens}/> : <Home token={localStorage.getItem('access_token')}/>}
        </div>
    )
}
export default Launch
