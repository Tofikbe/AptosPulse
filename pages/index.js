import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Welcome to AptosPulse 🚀</h1>
      <p>The Aptos community vibes here 🔥</p>
      <Image src="/aptos-logo.png" alt="Aptos Logo" width={150} height={150} />
    </div>
  );
}
