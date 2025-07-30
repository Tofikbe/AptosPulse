import Image from "next/image"

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-green-900 to-black relative overflow-hidden">
      {/* Blur effect */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/40 z-0"></div>

      {/* Login Box */}
      <div className="z-10 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-white w-80 flex flex-col items-center">
        {/* Logo */}
        <img
          src="https://protoinfrastack.ivondy.com/media/4agqdaZyirwygydyqxZwYgAgfzK3pZrxWx3G"
          alt="PulseAI Logo"
          className="w-24 h-24 mb-4 rounded-full border border-white"
        />

        <h1 className="text-xl font-bold mb-4">Welcome to PulseAI</h1>

        {/* Email Login */}
        <button className="bg-green-600 hover:bg-green-700 w-full py-2 mb-3 rounded-md text-white font-medium">
          Continue with Email
        </button>

        {/* Twitter Login */}
        <button className="bg-black border border-white hover:bg-gray-900 w-full py-2 rounded-md text-white font-medium">
          Continue with X (Twitter)
        </button>
      </div>
    </div>
  )
}
