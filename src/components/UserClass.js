import React from 'react'

class UserClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const{name,age}=this.props
        return(
            <div>
                <p>my name is {name} and age {age}</p>
            </div>
        )
    }
}

export default UserClass