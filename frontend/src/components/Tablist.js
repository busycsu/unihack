import React, {Component} from 'react';
import Tab from './Tab';

class Tablist extends Component{
    
    render(){
        // console.log("id is"+this.props.activetab);
        return (
            this.props.tabs.map((tab) =>
                <Tab out={tab} activetab = {this.props.activetab} ctab = {this.props.ctab}/>
            )
        )
    }
}
export default Tablist