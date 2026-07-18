export function getAuthToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("access") || localStorage.getItem("authToken");
}

export function isAuthTokenValid() {
  const token = getAuthToken();
  return Boolean(token);
}
