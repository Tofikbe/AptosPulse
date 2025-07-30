import { getProviders, signIn } from "next-auth/react"

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default function LoginPage({ providers }) {
  return (
    <div style={{
      height: "100vh",
      backgroundImage: "url('https://protoinfrastack.ivondy.com/media/AuyKf8Mzq2Fi5XHVQOLBuijX8fXufqFhYPAh')",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backdropFilter: "blur(5px)",
    }}>
      <h1 style={{ fontSize: "30px", color: "#fff", marginBottom: "20px" }}>Welcome Back Yappers</h1>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id)}
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              marginBottom: "10px",
              cursor: "pointer",
              fontSize: "16px",
              width: "220px"
            }}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}
