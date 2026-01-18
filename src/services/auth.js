const AUTH_KEY = "auth_user";

// usuário fixo (exemplo)
const USER = {
  email: "admin@email.com",
  password: "123456"
};

export function login(email, password) {
  if (email === USER.email && password === USER.password) {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ email }));
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated() {
  return !!localStorage.getItem(AUTH_KEY);
}
