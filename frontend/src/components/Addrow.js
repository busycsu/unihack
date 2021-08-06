import {useState} from 'react'

const AddRow = ({onAdd}) => {
    const [age, setAge] = useState('')
    const [weight, setWeight] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (age.length==0) {
            alert('Age needs to be non-empty')
            return
        }
        if (age > 200) {
            alert('Age needs to be less than 200')
            return
        }
       
        if(weight.length == 0){
            alert('Weights needs to be non-empty')
            return
        }

        
        onAdd({age, weight})
        setAge('')
        setWeight('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='from-control'>
                <label className='inputTitle'>Age</label>
                <input className='inputArea' type='text' placeholder='Add Age'
                value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className='form-control'>
                <label className='inputTitle'>Weight</label>
                <input className='inputArea' type='text' placeholder='Add Weight'
                value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <input className='submitBtn' type='submit' value='Add' />
        </form>
    )
}
export default AddRow