import { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import { Route, Routes } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import { Dashboard } from './components/Dashboard/Dashboard'
import PostPage from './components/Dashboard/Posts/PostPage.jsx'

const MainContext = createContext()

function App() {
  const [isHome, setIsHome] = useState(true);
  const [user, setUser] = useState();
  const [contacts, setContacts] = useState();
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/toege/contact/")
    .then(response => response.json())
    .then(setContacts)
  }, []);

  if (!contacts) {
    return (<div>Loading...</div>)
  }
  if (!user) {
    setUser(contacts[10])
  }



  return (
    <>
    <div className="container">
      <MainContext.Provider value = { { user: user, setUser: setUser, contacts: contacts, isHome: isHome, setIsHome: setIsHome, update: update, setUpdate:setUpdate} }>
        <Header/>
        <LeftMenu />

        <Routes>
          <Route  path="/post/:id" element={<PostPage /> }/> 
          <Route  path="/profile" element={<Profile /> }/> 
          <Route  path="/" element={<Dashboard /> }/> 
        </Routes>
      </MainContext.Provider>

    </div>
    
    </>
  )
}

export { App, MainContext };
