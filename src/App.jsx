import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Friends from './components/Friends'
import Profile from './components/Profile'
import Addpost from './components/Addpost'
import { Provider } from './Store/PostsStore'
const App = () => {
  return (<Provider>
    <main>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/friends' element={<Friends/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/addpost' element={<Addpost/>}/>
      </Routes>
    </BrowserRouter>
    </main>
    </Provider>
  )
}

export default App
