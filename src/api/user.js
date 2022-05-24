

export function registro(data){
  const url = 'http://localhost:8000/register';
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
      if (result.id) {
        if(result.isFreelancer){
          localStorage.setItem("ID", result.id);
          return { ok: true, free: true, message: "Freelancer creado correctamente" };
        }else{
          return { ok: true, message: "Usuario creado correctamente" };
        }
      }
      console.log('resultado:' + result)
      return { ok: false, message: result.message };
    })
}

export function iniciar_sesion(data) {
  const url = 'http://localhost:8000/login';
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.text();
    })
    .then(result => {
      return result;
    })
}
