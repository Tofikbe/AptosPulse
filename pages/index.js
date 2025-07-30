// pages/index.js import { useState } from 'react' import axios from 'axios' import { useRouter } from 'next/router'

export default function LoginPage() { const [email, setEmail] = useState('') const [loading, setLoading] = useState(false) const router = useRouter()

const handleSubmit = async (e) => { e.preventDefault() setLoading(true) try { await axios.post('/api/send-otp', { email }) router.push(/verify?email=${email}) } catch (err) { alert('Error sending OTP') } setLoading(false) }

return ( <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }}> <div style={{ background: 'rgba(0, 128, 0, 0.3)', backdropFilter: 'blur(15px)', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', width: '90%', maxWidth: '400px', color: 'white', textAlign: 'center' }}> <h1 style={{ marginBottom: '10px', fontSize: '28px', fontWeight: 'bold' }}>Welcome Back Yappers</h1> <p style={{ marginBottom: '20px', color: '#d1d5db' }}>Enter your email to receive OTP</p>

<form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '20px',
          borderRadius: '6px',
          border: 'none',
          outline: 'none',
          fontSize: '16px'
        }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#00ff9d',
          color: '#000',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        {loading ? 'Sending OTP...' : 'Send OTP'}
      </button>
    </form>

    <p style={{ marginTop: '20px', color: '#ccc' }}>Powered by PulseAI</p>
  </div>
</div>

) }

