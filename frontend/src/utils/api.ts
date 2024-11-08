const API_BASE_URL = "http://localhost:5000";

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "An error occurred");
  }

  return response.json();
}

export const api = {
  get: (endpoint: string) => apiRequest(endpoint),
  post: (endpoint: string, data: any) =>
    apiRequest(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  patch: (endpoint: string, data: any) =>
    apiRequest(endpoint, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  delete: (endpoint: string) =>
    apiRequest(endpoint, {
      method: "DELETE",
    }),
};
