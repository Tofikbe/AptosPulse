import { useState } from 'react'

const emojis = [
  { symbol: '🔥', animation: 'bounce' },
  { symbol: '🧠', animation: 'spin' },
  { symbol: '💻', animation: 'shake' },
  { symbol: '🌐', animation: 'zoom' },
  { symbol: '🚀', animation: 'flip' },
]

export default function Home() {
  const [active, setActive] = useState({})

  const handleClick = (i) => {
    setActive({ ...active, [i]: true })
    setTimeout(() => setActive({ ...active, [i]: false }), 1000)
  }

  const randomPosition = () => ({
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
  })

  return (
    <div style={{
      position: "relative",
      width: "100vw",
      height: "100vh",
      background: "#0f0f0f",
      overflow: "hidden",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Aptos_logo_black.svg"
        alt="Aptos Logo"
        style={{
          position: "absolute",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          height: "60px"
        }}
      />

      {emojis.map((emoji, i) => {
        const pos = randomPosition()
        return (
          <div
            key={i}
            onClick={() => handleClick(i)}
            style={{
              position: "absolute",
              fontSize: "2.5rem",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              ...pos,
              animation: active[i] ? `${emoji.animation} 1s ease` : "none"
            }}
          >
            {emoji.symbol}
          </div>
        )
      })}

      <style jsx global>{`
        @keyframes bounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.5); }
          100% { transform: scale(1); }
        }
        @keyframes flip {
          0% { transform: rotateY(0); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(0); }
        }
      `}</style>
    </div>
  )
}
