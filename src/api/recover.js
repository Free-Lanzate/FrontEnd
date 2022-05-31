export function recoverPassword(data){
    const url = 'http://localhost:8000/recoveryPassword';
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params).then(response =>{
        return response.json();
    })
        .then(result => {
            return result;
        })
}