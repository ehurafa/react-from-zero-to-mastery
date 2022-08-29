import './MyForm.css'
import { useState } from 'react'

function MyForm() {

    // 3 - gerenciamento de dados

    const [name, setName] = useState() 
    const [email, setEmail] = useState()


    const handleName = (e) => {
        setName(e.target.value)
    }

    console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('enviando o formulario')
    }


    return (
        <div>
            {/* 5 envio de form */}
            {/* 1 criação de form /*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
                    <input type="submit" value="Enviar" />
                </div>
                <label>
                    <span>E-mail</span>
                    {/* 4 simplificação de manipulação de state */}
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default MyForm;