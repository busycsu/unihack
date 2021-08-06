import {useState} from 'react'

const Signin = ({onAdd}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (email.length == 0) {
            alert('Email needs to be non-empty')
            return
        }
        if (password.length == 0) {
            alert('Password needs to be non-empty')
            return
        }
        onAdd({email, password})
        setEmail('')
        setPassword('')
    }
    return (
        <div className="signin">
            <form className='add-form' onSubmit={onSubmit}>
            <div className='from-control'>
                    <label className='inputTitle'>Email</label>
                    <input className='inputArea' type='text' placeholder='Email' 
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='from-control'>
                    <label className='inputTitle'>Password</label>
                    <input className='inputArea' type='password' placeholder='Password' 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <input className='submitBtn' type='submit' value='Sign In' />
            </form>
        </div>
    )
}
export default Signin
