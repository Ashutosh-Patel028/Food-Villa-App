import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
        console.log("Constructor");
    }
    componentDidMount(){
        //All API calls will be made here
        console.log("Component Did Mount");
    }
    render(){
        console.log("render");
        return(
            <div>
                <h1>This is my Profile Class</h1>
                <p>{this.state.count}</p>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Count2</button>
            </div>
            )
    }
}

export default Profile;