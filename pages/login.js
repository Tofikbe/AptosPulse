import React from 'react'

export default function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Welcome Back!</h2>
        <p style={styles.subheading}>Fill your login details</p>

        <input style={styles.input} type="text" placeholder="Email Address" />
        <input style={styles.input} type="password" placeholder="Password" />

        <button style={styles.button}>Login</button>

        <p style={styles.registerText}>
          No account? <a href="#" style={styles.link}>Register here</a>
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, rgba(0,255,0,0.1), rgba(0,0,0,0.9))',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  loginBox: {
    background: 'rgba(0, 0, 0, 0.6)',
    padding: 30,
    borderRadius: 12,
    width: '100%',
    maxWidth: 360,
    boxShadow: '0 0 20px rgba(0,255,0,0.2)',
    color: '#fff',
    textAlign: 'center'
  },
  heading: {
    fontSize: 24,
    marginBottom: 10
  },
  subheading: {
    fontSize: 14,
    marginBottom: 20,
    color: '#ccc'
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 6,
    border: 'none',
    outline: 'none',
    background: '#111',
    color: '#0f0'
  },
  button: {
    width: '100%',
    padding: 12,
    background: '#0f0',
    border: 'none',
    borderRadius: 6,
    fontWeight: 'bold',
    color: '#000',
    cursor: 'pointer'
  },
  registerText: {
    marginTop: 15,
    fontSize: 13,
    color: '#aaa'
  },
  link: {
    color: '#0f0',
    textDecoration: 'underline'
  }
}
