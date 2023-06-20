

const API_URL = 'http://localhost:8080';

export function login(email, password){
    return fetch(`${API_URL}/login`, {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
      })
}