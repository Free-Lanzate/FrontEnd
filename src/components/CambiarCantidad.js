import {Button} from "react-bootstrap";
import {React, useState} from 'react'

const CambiarCantidad = (props) => {

    const[data ,setData] = useState({
        cartItemId: props.id,
        newQuantity: props.cantidad
    })

  const changeForm = e => {
    if(e.target.name === 'newQuantity'){
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    
    console.log(data)
    };

  return (
    <div>
        <form>
        <div onChange={changeForm}>
            <label for="newQuantity">Cantidad</label>
            <input 
                type="number" 
                id="newQuantity" 
                name="newQuantity" 
                min="2"
                value = {data.newQuantity}
                />
        </div>
        <Button /*onClick={() => cambiarCantidad(items.id)}*/>
            Cambiar
        </Button>
    </form>
    </div>
  )
}

export default CambiarCantidad