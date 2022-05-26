import React, {useState} from 'react'
import {notification} from "antd";
import {anuncia} from "../api/posts";
import{getAccessToken} from "../api/auth"
import jwtDecode from "jwt-decode";

const Anuncios = () => {

  const user = jwtDecode(getAccessToken())

  const [inputs, setInputs] = useState({
    postTitle: "",
    freelancerId: "",
    postDescription: "",
    postPrice: "",
    postCategory: 1,
    thumbnailUrl: "",
    adPriority: 0
  });

  const changeForm = e => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      });
  };

  const publish = async e => {
    e.preventDefault();
    const result = await anuncia(inputs,user.sub.id);
    console.log(result)
    if (!result.id) {
      notification["error"]({
        message: result.message
      });
    } else {
        resetForm();
        window.location.href = "/";
    }
  }

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }

    setInputs({
      postTitle: "",
      freelancerId: "",
      postDescription: "",
      postPrice: "",
      postCategory: 1,
      thumbnailUrl: "",
      adPriority: 0
    });
  };
  return (
      <div className="contenedorPerfil text-center d-flex">
        <div className="container rounded row">
          <h5 className=" welcome mb-3 fw-bold">Anunciarme</h5>
          <div onSubmit={publish} onChange={changeForm}>
          <form>
            <div className="row mt-3">
              <div className="form-floating col">
                <input
                    type="text"
                    className="form-control mb-3"
                    id="postCategory"
                    name="postCategory"
                    placeholder="postCategory"
                    value = {inputs.postCategory}
                    readOnly
                />
                <label htmlFor="PostCategoryId" className="ms-3">Categoría</label>
              </div>
              <div className="form-floating col">
                <input
                    type="text"
                    className="form-control mb-3"
                    id="postTitle"
                    name="postTitle"
                    placeholder="postTitle"
                    value = {inputs.postTitle}
                />
                <label htmlFor="postTitle" className="ms-3">Título</label>
              </div>
            <div className="form-floating col">
              <input
                  type="text"
                  className="form-control mb-3"
                  id="postPrice"
                  name="postPrice"
                  placeholder="postPrice"
                  value = {inputs.postPrice}
              />
              <label htmlFor="postPrice" className="ms-3">Precio</label>
            </div>
            </div>
              <div className="form-floating col">
                <textarea
                    className="form-control mb-3 h-100"
                    id="postDescription"
                    name="postDescription"
                    placeholder="postDescription"
                    value = {inputs.postDescription}
                />
                <label htmlFor="postDescription" className="ms-3">¿En qué consiste el producto o servicio que deseas ofrecer?</label>
              </div>
            <div className="col">
              <button className="w-70 btn btn-lg btn-primary fw-bold" type="submit">Publicar</button>
            </div>
          </form>
          </div>
        </div>
      </div>
  )
}

export default Anuncios