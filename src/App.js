import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import MeetingForm from './components/MeetingForm'
import MeetingDashboard from './components/MeetingDashboard'

function App(){
    return (
        <BrowserRouter>
        <div>
            
            <Route path= "/form"  component= {MeetingForm} exact= {true} />
            <Route path= "/dashboard" component= {MeetingDashboard} />
            
        </div>
        </BrowserRouter>
    )
}


export default App