import React from 'react'
// import DatePicker from "react-datepicker";
import axios from '../config/axios'

class AddMeeting extends React.Component {
    constructor() {
        super()
        this.state= {
            meetingdate: '',
            starttime: '',
            endtime: '',
            description: ''
        }
    }

   

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const formData= {
            meetingdate: this.state.meetingdate,
            starttime: this.state.starttime,
            endtime: this.state.endtime,
            description: this.state.description
        }
        // console.log("formdata",formData)
        axios.post('/users',formData)
        .then((response) => {
            if(response.data.hasOwnProperty('error')){
                alert(response.data.message)
            }else {
                alert('Meeting save')
            }
        }).catch((err) => {
            console.log(err)
        })
        this.setState({
            meetingdate: '',
            starttime: '',
            endtime: '',
            description: ''
        })
    }

    render() {
        return(
            <div className= "container">
             {/* <DatePicker  
                // // selected={date}
                // onSelect={this.handleDateSelect} //when day is clicked
                // onChange={this.handleDateChange} //only when value has 
             className= "date" */}
             <h1 className= "title">Company Meeting Scheduler</h1>
             <form onSubmit= {this.handleSubmit}>
            <div>
                <input 
                    type= "date"  
                    placeholder= "Meeting Date" 
                    className= "datemanage" 
                    name= "meetingdate"
                    onChange= {this.handleChange}
                    value= {this.state.meetingdate}
                /> 
            </div>
            <br />
             <div>
                <input 
                    type= "time" 
                    placeholder= "start Time" 
                    className= "starttimemanage"
                    name= "starttime"
                    onChange= {this.handleChange}
                    value= {this.state.starttime}
                />
                <input 
                    type= "time" 
                    placeholder= "start Time" 
                    className= "endtimemanage"
                    name= "endtime"
                    onChange= {this.handleChange} 
                    value= {this.state.endtime}
                />
             </div>
             <br />
            
            <textarea 
                placeholder= "Description" 
                className= "desc"
                name= "description"
                value= {this.state.description}
                onChange= {this.handleChange}
            >
                
            </textarea> <br />

            <input 
                type= "submit" 
                value= "save" 
                className= "btn-color" 
                
            />
             </form>
            </div>
        )
    }
}

export default AddMeeting 