

const API_URL = 'http://localhost:8080';

export function login(email, password){
    console.log(email, password)
    return fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
      })
}