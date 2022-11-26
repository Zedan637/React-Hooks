import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Message from './Hooks Example/Message'
import Counter from './Hooks Example/Counter'
class App extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/useState" element={<Message/>} />
                    <Route path="/counter" element={<Counter/>} />
                </Routes>
            </Router>
        </React.Fragment>
    }
}
export default App