const Row = ({usrInfo, onDelete, onUpdate}) => {
    return (
        <div className={"row"} onDoubleClick={()=> onUpdate(usrInfo.id)}>
            <p style={{margin: '0',marginTop: '5px'}}> Age: {usrInfo.age}</p>
            <p style={{margin: '0',marginTop: '5px'}}> Weight: {usrInfo.weight} </p>

            <div className='deleteBtn' style={{color: 'red', cursor: 'pointer'}}
                    onClick = {() => onDelete(usrInfo.id)}>
                    Delete
                </div>
        </div>
    )
}

export default Row