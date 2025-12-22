export async function sendOTP(mobile) {
  const body = {
    mobile: mobile,
    userType: "PARTNER",
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/send-otp`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to send OTP");
  }

  return await res.json();
}
