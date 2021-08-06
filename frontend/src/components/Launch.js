import {useState} from 'react'
import SigninOrUp from './SigninOrUp'
import Home from './Home'
const Launch = () =>{
    const[refreshToken, setRefreshToken] = useState("")
    const[accessToken, setAccessToken] = useState("")
    const getTokens = async (tokens) => {
        if(tokens["access"] !== undefined){
            setRefreshToken(tokens.refresh)
            setAccessToken(tokens.access)
            localStorage.setItem('access_token', tokens.access);
        }else{
            alert('Incorrect password or email')
        }
    }
    return (
        <div className="home">
            {localStorage.getItem('access_token') ==""? <SigninOrUp getToken={getTokens}/> : <Home token={localStorage.getItem('access_token')}/>}
        </div>
    )
}
export default Launch
