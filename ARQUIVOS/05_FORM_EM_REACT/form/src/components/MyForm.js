import './MyForm.css'
import { useState } from 'react'

function MyForm() {

    // 3 - gerenciamento de dados

    const [name, setName] = useState() 
    const [email, setEmail] = useState()


    const handleName = (e) => {
        setName(e.target.value)
    }

    console.log(name)


    return (
        <div>
            {/* criação de form /*/}
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
                    <input type="submit" value="Enviar" />
                </div>
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default MyForm;