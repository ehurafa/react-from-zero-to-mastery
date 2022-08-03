import { useState } from 'react'

function ListRender() {
    const [list] = useState(['Matheus', 'Pedro', 'Josias'])
  
    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListRender;