export function decode(token) {
  try {
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(window.atob(base64));
    }
    return null;
  } catch (e) {
    return null;
  }
}

export function isLoggedIn() {
  try {
    const token = window.localStorage.getItem('token');
    const decoded = token && decode(token);
    const user = decoded.data;
    if (user && user.id && user.email) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

export function setToken(token) {
  return window.localStorage.setItem('token', token);
}
