import {useState, useEffect} from 'react'
import Rows from './Rows'
import AddRow from './Addrow'
const Table = (token) =>{
    const [usrInfo, setUsrInfo] = useState([])
    const [inCreate, setCreateClick] = useState(false)
    const [inEdit, setEdit] = useState(false)
    const [id, setID] = useState(-1)

    useEffect(() => {
        const getUsrInfo = async () => {
            const usrInfoFromServer = await fetchUsrInfo()
            setUsrInfo(usrInfoFromServer)
        }
        getUsrInfo()
    }, [])

    const fetchUsrInfo = async () =>{
        const res = await fetch("https://unihackbackend.herokuapp.com/api/reg/display-table/")
        const data = await res.json()
        
        return data
    }

    const addRow = async (row) => {
        const accessKey = token.token
        const res = await fetch('https://unihackbackend.herokuapp.com/api/reg/add-data/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessKey}`,
            'Content-type': 'application/json',
          },
          body: JSON.stringify(row),
        })
    
        const data = await res.json()
        setUsrInfo([...usrInfo, data])
    }

    const editSignal = (cur) => {
        if (cur == id) {
            setEdit(false)
            setID(-1)
            return 
        }
        setEdit(true)
        setID(cur)
    }

    const deleteTask = async (id) =>{
        const res = await fetch(`https://unihackbackend.herokuapp.com/api/reg/${id}/`, {method: 'DELETE'})
        setUsrInfo(usrInfo.filter((usrInfo) => usrInfo.id !== id))

    }
    

    return (
        <div className="container" >
            {usrInfo.length > 0 ? <Rows usrInfos={usrInfo} onDelete={deleteTask} onUpdate={editSignal} />:
            <div>{'No available schedules at this momemnt'}</div>
            }
            <AddRow onAdd={addRow}/>
        </div>
    )
}
export default Table
