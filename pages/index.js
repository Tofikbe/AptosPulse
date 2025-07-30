import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    setLoading(false)
    if (res.ok) setSuccess(true)
  }

  return (
    <>
      <Head>
        <title>PulseAI Login</title>
      </Head>
      <div style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '2rem',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.2)',
          width: '90%',
          maxWidth: '400px',
          textAlign: 'center',
          color: '#fff'
        }}>
          <img
            src="https://pulse-uploads.s3.ap-south-1.amazonaws.com/logo+square+transparent.png"
            alt="PulseAI Logo"
            style={{ width: 80, height: 80, marginBottom: '1rem' }}
          />
          <h2>Welcome Back!</h2>
          <p style={{ marginBottom: '1.5rem' }}>Fill your login details.</p>
          {success ? (
            <p>OTP sent! Check your email.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '1rem',
                  borderRadius: '5px',
                  border: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
                disabled={loading}
              >
                {loading ? 'Sending OTP...' : 'Login'}
              </button>
            </form>
          )}
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            No Account? Register <a href="#" style={{ color: '#00f' }}>Here</a>
          </p>
        </div>
      </div>
    </>
  )
}
