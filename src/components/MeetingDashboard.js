import React from 'react'
import axios from '../config/axios'

class MeetingDashboard extends React.Component {
    constructor() {
    super()
    this.state= {
        users: []
    }    
}

componentDidMount() {
    axios.get('/users')
    .then(response => {
        const users= response.data
        this.setState({users})
    }).catch(err => {
        console.log(err)
    })
}


render(){
    const {users}= this.state
    return(
        <div>
            <h1 className= "title">MeetingDashboard</h1>
            {
                users.map(ele => {
                    return (
                        <div>
                            <table border= "1">
                                <tbody>
                                    <tr>{ele.start_time}</tr>- <tr>{ele.end_time}</tr> <tr>Meeting with{ele.participants}</tr>
                                 </tbody>
                            </table>
                        </div>
                    )
                })
            }

            <input type= "submit" value= "Add Meeting" className= "add-btn-color" />
        </div>
    )
}
}  


export default MeetingDashboard