
const API_URL = 'http://localhost:8080';

export function printarProdutos(){
    return fetch(`${API_URL}/products`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
      })
}