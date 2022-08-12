import { useState } from 'react'

function ConditionalRender() {

    const [x] = useState(true)

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
        </div>
    )
}

export default ConditionalRender;