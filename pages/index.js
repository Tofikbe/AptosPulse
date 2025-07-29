// pages/index.js

export default function Home() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <img
        src="/aptos-logo.png"
        alt="Aptos Logo"
        width={200}
        height={200}
        style={{ cursor: 'pointer' }}
        onClick={() => alert('🔥 Aptos Pulse!')}
      />
      <h1>Aptos Community ❤️‍🔥</h1>
    </div>
  )
}
