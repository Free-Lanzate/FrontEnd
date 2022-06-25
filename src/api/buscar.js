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

    export function infoAnuncio(id){
        const url = 'http://localhost:8000/post/' + id;
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


    export function perfilFreelancer(id){
        const url = 'http://localhost:8000/freelancer/profile/' + id;
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

  export function buscarAnunciosPorPalabra(palabra){
    const url = 'http://localhost:8000/search?keyword=' + palabra;
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

  export function buscarFreelancerPorPalabra(palabra){
    const url = 'http://localhost:8000/searchFreelancer?keyword=' + palabra;
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
