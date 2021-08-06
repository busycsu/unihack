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
        console.log(accessToken)
    }
    return (
        <div className="home">
            {accessToken === ""? <SigninOrUp getToken={getTokens}/> : <Home token={accessToken}/>}
        </div>
    )
}
export default Launch
