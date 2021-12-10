import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../home/Home'
//페이지는 컴포넌트를 들고있는 아이들
const HomePage = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default HomePage
