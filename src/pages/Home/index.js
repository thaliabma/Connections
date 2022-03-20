import React from 'react'
import Header from './components/Header'
import style from './style.css'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="nav-bar">NavBar</div>
        <div className="feed">feed</div>
      </main>
    </div>
  )
}
