import { useState } from 'react'

function ListRender() {
    const [list] = useState(['Matheus', 'Pedro', 'Josias'])

    const [users] = useState([
        { id: 1, name: "Rafael", age: 31 },
        { id: 23545, name: "João", age: 45 },
        { id: 67543, name: 'Enzo', age: 10 }
    ])
  
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <ul>
                { users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListRender;