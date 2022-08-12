import { useState } from 'react'

function ConditionalRender() {

    const [x] = useState(true)

    const [name, setName] = useState('Rafael')

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}

            {name === 'João' 
                ? (
                    <div>
                        <p>O nome é João</p>
                    </div>
                ) 
                : (
                    <div>
                        <p>Nome não encontrado</p>
                    </div>
                )
            }

            <button onClick={() => setName('João')}>Reset name</button>

        </div>
    )
}

export default ConditionalRender;