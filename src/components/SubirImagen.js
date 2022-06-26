import React, {Fragment, useState} from 'react';

const SubirImagen = ({inputs, setInputs}) => {
  const [file, setFile] = useState(null)

  const selectedHandler = e => {
    setFile(e.target.files[0])
  }

  const sendHandler = () => {
    if(!file){
      alert('you must upload file')
      return
    }

    const formdata = new FormData()
    formdata.append('image', file)

    /*setInputs({
      if (inputs.name ===) {
        
      }
    });*/

    console.log(inputs)
    console.log(file)

    //document.getElementById('fileinput').value = null

    //setFile(null)
  }

  return (
    <Fragment>
      <div className="container mt-5">
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
      </div>
    </Fragment>
  );
}

export default SubirImagen