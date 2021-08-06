import Row from './Row'

const Rows = ({usrInfos,onDelete,onUpdate}) => {
    return (
        <div className="rows">
            {usrInfos.map((usrInfo) => <Row key={usrInfo.id} usrInfo={usrInfo} onDelete={onDelete} onUpdate={onUpdate}/>)}
        </div>
    )
}

export default Rows