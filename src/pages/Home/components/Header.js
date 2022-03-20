import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="toolbar">
        <div>
          <a href="/">Connections</a>
        </div>
        <div>
          <button>Novo Post</button>
          <span>Img1</span>
          <span>Img2</span>
        </div>
      </div>
    </header>
  )
}
