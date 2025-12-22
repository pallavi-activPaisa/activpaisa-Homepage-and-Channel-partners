export const BASE_URL = "http://13.205.79.132:8080/api/v1";

export async function sendOTP(mobile) {
  const res = await fetch(`${BASE_URL}/auth/send-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      mobile,
      userType: "PARTNER",
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to send OTP");
  }

  return data;
}

export async function verifyOTP(mobile, otp) {
  const res = await fetch(`${BASE_URL}/auth/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      mobile,
      userType: "PARTNER",
      otp,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Invalid OTP");
  }

  return data;
}
