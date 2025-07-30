export default function Login() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite',
      color: '#fff',
      fontFamily: 'sans-serif',
      flexDirection: 'column'
    }}>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        input {
          padding: 10px;
          border: none;
          border-radius: 5px;
          margin: 5px 0;
          width: 250px;
        }
        button {
          padding: 10px 20px;
          background-color: #00ff99;
          border: none;
          border-radius: 5px;
          margin-top: 10px;
          cursor: pointer;
          font-weight: bold;
        }
      `}</style>

      <h1>PulseAI Login</h1>
      <form method="POST" action="/api/send-otp">
        <input type="email" name="email" placeholder="Enter your email" required />
        <button type="submit">Send OTP</button>
      </form>
    </div>
  )
}
