import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState('')

  const sendOtp = async () => {
    const res = await fetch('/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    if (res.ok) setOtpSent(true)
  }

  const verifyOtp = async () => {
    const res = await fetch('/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp }),
    })
    if (res.ok) window.location.href = '/dashboard'
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://protoinfrastack.ivondy.com/media/AuyKf8Mzq2Fi5XHVQOLBuijX8fXufqFhYPAh")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '2rem',
        borderRadius: '1rem',
        backdropFilter: 'blur(8px)',
        maxWidth: 400,
        width: '100%',
        textAlign: 'center',
        color: '#fff',
      }}>
        <h1 style={{ fontSize: 24, marginBottom: 20 }}>Welcome Back Yappers</h1>

        {!otpSent ? (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '10px',
                width: '100%',
                marginBottom: '1rem',
                borderRadius: '5px',
                border: 'none',
              }}
            />
            <button
              onClick={sendOtp}
              style={{
                backgroundColor: '#00ff9d',
                color: '#000',
                padding: '10px',
                borderRadius: '5px',
                width: '100%',
                marginBottom: '1rem',
              }}
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{
                padding: '10px',
                width: '100%',
                marginBottom: '1rem',
                borderRadius: '5px',
                border: 'none',
              }}
            />
            <button
              onClick={verifyOtp}
              style={{
                backgroundColor: '#00ff9d',
                color: '#000',
                padding: '10px',
                borderRadius: '5px',
                width: '100%',
                marginBottom: '1rem',
              }}
            >
              Verify OTP
            </button>
          </>
        )}

        <hr style={{ margin: '1rem 0', borderColor: '#666' }} />

        <button
          onClick={() => signIn('twitter')}
          style={{
            backgroundColor: '#1da1f2',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            width: '100%',
          }}
        >
          Login with X (Twitter)
        </button>
      </div>
    </div>
  )
}
