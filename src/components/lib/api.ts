const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export type SubscriptionData = {
  fullerName: string;
  phone: string;
  areaOfInterest: string;
  enterpriseId: number
};

// Renova token e salva no localStorage
export async function refreshToken(): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/trocarRota`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Falha ao gerar token.");
  }

  const data = await response.json();
  localStorage.setItem("apiToken", data.token);
  localStorage.setItem(
    "tokenExpiry",
    (Date.now() + 30 * 24 * 60 * 60 * 1000).toString()
  );
  return data.token;
}

// Retorna token válido
export async function getToken(): Promise<string> {
  const token = localStorage.getItem("apiToken");
  const expiry = Number(localStorage.getItem("tokenExpiry") || 0);

  if (!token || Date.now() > expiry) {
    return await refreshToken();
  }
  return token;
}

// Envia dados do formulário para a API
export async function submitSubscription(
  subscriptionData: SubscriptionData
): Promise<object> {
  const token = await getToken(); // garante token válido

  const response = await fetch(`${API_BASE_URL}/trocarRota`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(subscriptionData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Falha ao enviar inscrição.");
  }

  return await response.json();
}
