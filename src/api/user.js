

export function registro(data){
  data.username = data.email.substring(0,data.email.indexOf('@'))
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


export function registroFreelancer(data){
  const url = 'http://localhost:8000/register/freelancer';
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

export function miPerfil(id){
  const url = 'http://localhost:8000/profile/' + id;
  const params = {
    method: "GET",
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

export function perfilFreelancer(id){
  const url = 'http://localhost:8000/freelancer/user/' + id;
  const params = {
    method: "GET",
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

export function editarPerfil(id, data){
  const url = 'http://localhost:8000/user/' + id + '/update';
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

export function editarPerfilFreelancer(id, data){
  const url = 'http://localhost:8000/freelancer/' + id + '/update';
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

export function eliminarUsuario(id){
  const url = 'http://localhost:8000/user/' + id + '/delete';
  const params = {
    method: "POST",
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