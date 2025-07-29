
import Image from 'next/image'
import { useState } from 'react';

const emojis = ['🔥','🚀','💎','🌊','⚡','🧠']

export default function Home() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ textAlign:'center', padding:'50px' }}>
      <Image src="/aptos-logo.png" alt="Aptos Logo" width={150} height={150} />
      <h1>🌊 Welcome to AptosPulse</h1>
      <p>Click an emoji below to activate</p>
      <div style={{ fontSize:'2.5rem', marginTop:'20px' }}>
        {emojis.map((e,i) => (
           <span key={i}
               onClick={() => setActive(i)}
               style={{
                 margin:'0 10px', cursor:'pointer',
                 transform: active===i ? 'scale(1.5) rotate(20deg)' : 'scale(1)',
                 transition:'transform 0.3s ease'
               }}>
             {e}
           </span>
        ))}
      </div>
    </div>
  );
                 }
