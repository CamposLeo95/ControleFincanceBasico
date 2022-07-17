import './Lista.css'

import { useState } from 'react'

const Lista = () => {

    const[nome,setNome] = useState("")
    const[contato, setContato] = useState()
    const[valor, setValor] = useState()
  
    const handleCadastrar = () => {
       console.log("cadastrou");
    }
  
    return (

    <div className="list_container">  
        <div className="list_lista">

    </div>
    <div className="list_form">
        <form>
            <input type="text" placeholder="nome" onChange={(e)=> setNome(e.target.value)}/>
            <input type="text" placeholder="Contato" onChange={(e)=> setContato(e.target.value)}/>
            <input type="number" placeholder='Valor' onChange={(e)=> setValor(e.target.value)}/>
            <input type="button" className='btn' value="Registrar" onClick={handleCadastrar}/>
        </form>
    </div>

    </div>
  )
}

export default Lista