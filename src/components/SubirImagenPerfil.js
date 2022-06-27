import React, {Fragment, useState} from 'react';
import { subirImagenPerfil } from '../api/imagen';

const SubirImagenPerfil = ({setUrl}) => {
  const [file, setFile] = useState(null)

  const selectedHandler = e => {
    setFile(e.target.files[0])
  }

  const sendHandler = async e => {
    e.preventDefault();
    if(!file){
      alert('Debes seleccionar una imagen antes de subirla')
      return
    }
    const formdata = new FormData()
    formdata.append('image', file)
    
    const result = await subirImagenPerfil(formdata)
    console.log(result)
    alert('Tu imagen a sido actualizada correctamente')

    setUrl({avatarUrl:result.filename})

    document.getElementById('fileinput').value = null

    setFile(null)
  }

  return (
    <Fragment>

        <div className="card p-3">
          <div className="row">
            <div className="col-10">
              <input 
                id="fileinput"
                name='fileinput' 
                onChange={selectedHandler} 
                className="form-control" 
                type="file"
                />
            </div>
            <div className="col-2">
              <button onClick={sendHandler} type="button" className="btn btn-primary col-12">Upload</button>
            </div>
          </div>
        </div>

    </Fragment>
  );
}

export default SubirImagenPerfil