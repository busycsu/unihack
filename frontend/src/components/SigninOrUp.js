import {useState} from 'react'
import Signup from './Signup'
import Signin from './Signin'
import Tablist from './Tablist';
const SigninOrUp = ({getToken}) =>{
    const [active, changeTab] = useState('')
    const tabs = [{id:0, title:'Sign Up'},{id:1, title:'Sign In'}];

    const signUp = async (info) => {
        console.log(info)
        const res = await fetch('https://unihackbackend.herokuapp.com/api/signup/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
              },
            body: JSON.stringify(info),
        })

        const data = await res.json()
        console.log(data)
        // setTasks([...tasks, data])
    }

    const signIn = async (info) => {
        console.log(info)
        const res = await fetch('https://unihackbackend.herokuapp.com/api/login/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(info),
        })
        const tokens = await res.json()

        getToken(tokens)

    }
    
    return (
        <div className="home">
            <div className="topnav">
                <Tablist tabs = {tabs} activetab = {active} ctab = {changeTab}/>
            </div>
            {active == 0 ? <Signup onAdd={signUp}/> : <Signin onAdd={signIn}/>}
        </div>
    )
}
export default SigninOrUp
