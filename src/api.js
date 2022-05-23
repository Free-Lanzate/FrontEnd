export function registro(data){
  let err;
  console.log(data)
    fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": '*',
          "Access-Control-Allow-Headers": "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
          "Allow": "GET, POST, OPTIONS, PUT, DELETE"
          },
        body: JSON.stringify(data)
    }).then((res) => {
      err = res.status !== 200;
      return res.text()
  }).then(data => {
      if(err) window.alert(data)
      else window.alert(data)
  })

    
    /*const url = 'http://localhost:8000/register';
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      };

      console.log(data)

     fetch(url, params).then(response =>{
        console.log(response);
     })*/
}

export function iniciar_sesion(data) {
    let err;
    fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*',
            "Access-Control-Allow-Headers": "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
            "Allow": "GET, POST, OPTIONS, PUT, DELETE"
        },
        body: JSON.stringify(data)
    }).then((res) => {
        err = res.status !== 200;
        return res.text()
    }).then(data => {
        if(err) window.alert(data)
        else window.alert(data)
    })
}