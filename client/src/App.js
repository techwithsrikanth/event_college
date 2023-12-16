import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Participate from './components/participate/Participate'
import Login from './components/login/Login'
import Organize from './components/organize/Organize'
import CreateEvent from './components/createevent/CreateEvent'
import EventsList from './components/eventslist/Eventslist'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/participate' element = {<Participate/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path = '/organize' element = {<Organize/>}/>
        <Route path = '/createevent' element = {<CreateEvent/>}/>
        <Route path='/eventslist' element = {<EventsList/>}/>
      </Routes>
    </div>
  )
}
export default App