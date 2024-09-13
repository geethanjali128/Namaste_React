
import React from "react";
import UserClass from './UserClass';

class About extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    render(){
        return(
            <div>
                <h1>class component about</h1>
                <UserClass name="anjali" age={21}/>
                <h3>count:{this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>increment</button>
            </div>
        )
    }
}

export default About;