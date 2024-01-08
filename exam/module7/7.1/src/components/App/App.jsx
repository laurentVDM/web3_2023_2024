import Home from "components/Home/Home"
import Login from "components/Login/Login"
import Note from "components/Note/Note"
import User from "components/User/User"

import { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom"

const App = () => {
    const [notes, setNotes] = useState([
      {
        id: 1,
        content: 'HTML is easy',
        important: true,
        user: 'Matti Luukkainen'
      },
      {
        id: 2,
        content: 'Browser can execute only JavaScript',
        important: false,
        user: 'Matti Luukkainen'
      },
      {
        id: 3,
        content: 'Most important methods of HTTP-protocol are GET and POST',
        important: true,
        user: 'Arto Hellas'
      }
    ])
  
    const [user, setUser] = useState(null)
  
    const login = (user) => {
      setUser(user)
    }
  
    const padding = {
      padding: 5
    }
  
    return (
      <div>
        <Router>
          <div>
            <Link style={padding} to="/">home</Link>
            <Link style={padding} to="/note">note</Link>
            <Link style={padding} to="/user">user</Link>
            {user
              ? <em>{user} logged in</em>
              : <Link style={padding} to="/login">login</Link>
            }
          </div>
  
          <Routes>
            <Route path="/note/:id" element={<Note notes={notes} />} />
            <Route path="/note" element={<Note notes={notes} />} />
            <Route path="/user" element={user ? <User /> : <Navigate replace to="/login" />} />
            <Route path="/login" element={<Login onLogin={login} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <div>
          <br />
          <em>Note app, Department of Computer Science 2023</em>
        </div>
      </div>
    )
  }
  export default App