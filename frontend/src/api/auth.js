const API_URL = "https://3001-sylviaboyani-clientflow-njm6dwc7omc.ws-eu118.gitpod.io"; // adjust if using a different port or Gitpod

export async function register({ email, password, passwordConfirmation }) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
      user: {
        email,
        password,
        password_confirmation: passwordConfirmation
      }
    })
  });

  return res.json();
}

export async function login({ email, password }) {
  const res = await fetch(`${API_URL}/users/sign_in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
      user: { email, password }
    })
  });

  return res.json();
}
