import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Message from './Hooks Example/Message'
class App extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/useState" element={<Message/>} />
                </Routes>
            </Router>
        </React.Fragment>
    }
}
export default App