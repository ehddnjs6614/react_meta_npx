import React from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { Route } from 'react-router'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'

function App() {
  return (
    //모든페이지에 헤더와 푸터가 있다고 가정한다면 앱에 2개가있는게맞음.
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/Login/:id" exact={true} component={LoginPage} />
      <Footer />
    </div>
  )
}

export default App
