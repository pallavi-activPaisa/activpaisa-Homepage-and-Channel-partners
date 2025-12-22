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


export async function verifyPAN(userId, token, pan, entityType, consentGiven = true) {
  const res = await fetch(`${BASE_URL}/partners/${userId}/pan/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      entityType,
      pan,
      consentGiven,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to verify PAN");
  }

  return data;
}


export async function submitEmail(userId, token, email) {
  const res = await fetch(`${BASE_URL}/partners/${userId}/email/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to submit email");
  }

  return data;
}


export async function setPassword(userId, token, password, confirmPassword) {
  const res = await fetch(`${BASE_URL}/auth/${userId}/set-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      password,
      confirmPassword,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to set password");
  }
  return data;
}

