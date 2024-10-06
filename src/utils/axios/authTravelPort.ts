export async function authTravelPort() {
  const url = "https://oauth.pp.travelport.com/oauth/oauth20/token";

  // Pre-request script (e.g., logging, setting dynamic headers)
  const headers = new Headers();
  headers.append("Cache-Control", "no-cache");
  headers.append("Content-Type", "application/x-www-form-urlencoded");

  const body = new URLSearchParams();
  body.append("grant_type", "password");
  body.append("username", "TP52936629"); // use environment variables or dynamic data here
  body.append("password", "hWCDGORG");
  body.append("client_id", "tUz1fhk0BW5Rk4ezBsLe8Xl0YXWtslcIZOygfWVg");
  body.append(
    "client_secret",
    "620d0ef58b70e3665386f75cd5703e40fd5e8a0193038b7087fe3700383e83ce",
  );
  body.append("scope", "openid");

  const options = {
    method: "POST",
    headers: headers,
    body: body,
  };

  try {
    // Make the API request
    const response = await fetch(url, options);

    // Post-request script (e.g., processing response, logging)
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("Token fetched successfully:", data);

    return data;
  } catch (error) {
    console.error("Error fetching token:", error);
  }
}
