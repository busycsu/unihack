import {useState} from 'react'

const Signup = ({onAdd}) =>{
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (email.length == 0) {
            alert('Email needs to be non-empty')
            return
        }
        if (firstName.length == 0) {
            alert('First Name needs to be non-empty')
            return
        }
        if (lastName.length == 0) {
            alert('Last Name needs to be non-empty')
            return
        }
        if (password.length == 0) {
            alert('Password needs to be non-empty')
            return
        }
        if (password2.length == 0) {
            alert('Password needs to be non-empty')
            return
        }

        onAdd({email, firstName, lastName, password,password2})
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
        setPassword2('')
    }
    return (
        <div className="signup">
            <form className='add-form' onSubmit={onSubmit}>
                <div className='from-control'>
                    <label className='inputTitle'>Email</label>
                    <input className='inputArea' type='text' placeholder='Email' 
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='from-control'>
                    <label className='inputTitle'>First Name</label>
                    <input className='inputArea' type='text' placeholder='First Name' 
                    value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className='from-control'>
                    <label className='inputTitle'>Last Name</label>
                    <input className='inputArea' type='text' placeholder='Last Name' 
                    value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className='from-control'>
                    <label className='inputTitle'>Password</label>
                    <input className='inputArea' type='password' placeholder='Password' 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='from-control'>
                    <label className='inputTitle'>Re-Enter Password</label>
                    <input className='inputArea' type='password' placeholder='Password' 
                    value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                </div>
                <input className='submitBtn' type='submit' value='Sign Up' />
            </form>
        </div>
    )
}
export default Signup
