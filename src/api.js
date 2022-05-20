export function registro(data){

    fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(data)
    }).then(() => {
        console.log('funciona')
    })

    
    /*const url = 'http://localhost:8000/register';
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      };

     fetch(url, params).then(response =>{
        console.log('funciona'); 
        console.log(response);
     })*/
}