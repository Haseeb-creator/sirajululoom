// Authentication utilities using localStorage only

export function getAdminToken() {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('admin_token')
}

export function getAdminEmail() {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('admin_email')
}

export function isAdminAuthenticated() {
  if (typeof window === 'undefined') return false
  return !!localStorage.getItem('admin_token')
}

export function logout() {
  if (typeof window === 'undefined') return
  localStorage.removeItem('admin_token')
  localStorage.removeItem('admin_email')
}
