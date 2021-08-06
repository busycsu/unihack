import {useState} from 'react'
import Inference from './Inferece';
import Table from './Table'
import Tablist from './Tablist';
const Home = (token,{getToken}) =>{
    const [active, changeTab] = useState('')
    const tabs = [{id:0, title:'View'},{id:1, title:'Inference'}];
    
    return (
        <div className="home">
            <div className="topnav">
                <Tablist tabs = {tabs} activetab = {active} ctab = {changeTab}/>
            </div>
            {active == 0 ? <Table token={token.token}/> : <Inference token={token.token}/>}
        </div>
    )
}
export default Home
