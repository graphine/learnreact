import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        return this.state.isLoggedIn && <div>Welcome Mithilesh</div>
        // return(
        //     this.state.isLoggedIn ?
        //         <div>Welcome Mithilesh</div> :
        //         <div>Welcome Guest</div>
        // )
        // let message;
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome MIthilesh</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{ message }</div>
        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Mithilesh
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Mithilesh</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
