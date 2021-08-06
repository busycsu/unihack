import {useState} from 'react'

const Inference = (token) =>{
    const [age, setAge] = useState('')
    const [weight, setWeight] = useState('')

    const predictWeight = async(age) => {
        const jsonAge = {"age": age}

        const accessKey = token.token
        console.log(accessKey)
        const res = await fetch('https://unihackbackend.herokuapp.com/api/reg/inference/', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessKey}`,
            'Content-type': 'application/json',
        },
            body: JSON.stringify(jsonAge),
        })
        const data = await res.json()
        const weight = data.weight[0]
        setWeight(weight)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (age.length==0) {
            alert('Age needs to be non-empty')
            return
        }
        predictWeight(age)
        // setAge('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='from-control'>
                <label className='inputTitle'>Age</label>
                <input className='inputArea' type='text' placeholder='Add Age'
                value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <p style={{margin: '0',marginTop: '5px'}}> Weight: {weight} </p>
            {/* <div className='form-control'>
                <label className='inputTitle'>Weight</label>
                <input className='inputArea' type='text' placeholder='Add Weight'
                value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div> */}
            <input className='submitBtn' type='submit' value='Predict' />
        </form>
    )
}
export default Inference
