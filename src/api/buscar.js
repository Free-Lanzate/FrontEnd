export function buscarCategoria(){
    const url = 'http://localhost:8000/categories';
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

  export function buscarFreelancer(){
    const url = 'http://localhost:8000/freelancer';
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

  export function buscarAnuncios(){
    const url = 'http://localhost:8000/post/getAll';
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


  export function buscarAnunciosPorCategoria(id){
    const url = 'http://localhost:8000/categories/' + id;
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
