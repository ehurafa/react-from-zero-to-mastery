import { useState } from 'react'

function ListRender() {
    const [list] = useState(['Matheus', 'Pedro', 'Josias'])

    const [users, setUsers] = useState([
        { id: 1, name: "Rafael", age: 31 },
        { id: 2, name: "João", age: 45 },
        { id: 4, name: 'Enzo', age: 10 }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
  
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
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
}

export default ListRender;