import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('/api/send-otp', { email })
      router.push(`/verify?email=${email}`)
    } catch (err) {
      alert('Error sending OTP')
    }
    setLoading(false)
  }

  return (
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: 'rgba(0, 128, 0, 0.3)',
          backdropFilter: 'blur(15px)',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
          width: '90%',
          maxWidth: '400px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: '10px', fontSize: '28px', fontWeight: 'bold' }}>
          Welcome Back Yappers
        </h1>
        <p style={{ marginBottom: '20px', color: '#d1d5db' }}>
          Enter your email to receive OTP
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '20px',
              fontSize: '16px',
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: '#00FFAA',
              color: '#000',
              fontWeight: 'bold',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              width: '100%',
              cursor: 'pointer',
            }}
          >
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
        </form>
        <p style={{ marginTop: '15px', fontSize: '14px', color: '#ccc' }}>
          Built with ❤️ by PulseAI
        </p>
      </div>
    </div>
  )
}
