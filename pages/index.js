import React, { useState } from 'react'

const emojis = ['🚀', '🔥', '💎', '⚡', '🧠', '🌍', '🛠️']

export default function Home() {
  const [clicked, setClicked] = useState(null)

  const handleClick = (index) => {
    setClicked(index)
    setTimeout(() => setClicked(null), 700)
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem', background: '#f2f2f2' }}>
      <img
        src="/aptos-logo.png"
        alt="Aptos Logo"
        style={{ width: '150px', marginBottom: '2rem' }}
      />
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Welcome to <span style={{ color: '#4a90e2' }}>Aptos Pulse</span> 🚨
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Powered by the Aptos community – full vibes only 🌊
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {emojis.map((emoji, i) => (
          <span
            key={i}
            onClick={() => handleClick(i)}
            style={{
              fontSize: '2.5rem',
              cursor: 'pointer',
              transform: clicked === i ? 'scale(1.5) rotate(20deg)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  )
}
