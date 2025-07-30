import React from 'react'

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url('https://protoinfrastack.ivondy.com/media/AuyKf8Mzq2Fi5XHVQOLBuijX8fXufqFhYPAh')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backdropFilter: 'blur(12px)',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '2rem',
          borderRadius: '20px',
          width: '90%',
          maxWidth: '400px',
          color: '#fff',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.6)',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', textAlign: 'center' }}>
          Welcome Back Yappers
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Please enter your login details
        </p>
        <form>
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Enter OTP"
            style={{ ...inputStyle, marginTop: '1rem' }}
          />
          <button
            type="submit"
            style={{
              marginTop: '1.5rem',
              width: '100%',
              padding: '0.75rem',
              background: '#00FFAA',
              border: 'none',
              borderRadius: '10px',
              color: '#000',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  background: 'rgba(255,255,255,0.2)',
  color: '#fff',
}
