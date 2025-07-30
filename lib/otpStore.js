let otpStore = {}

export const setOtp = (email, otp) => {
  otpStore[email] = { otp, createdAt: Date.now() }
}

export const getOtp = (email) => {
  return otpStore[email]
}

export const deleteOtp = (email) => {
  delete otpStore[email]
}
